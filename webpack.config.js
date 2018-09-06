var debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // devtool: debug ? "inline-sourcemap" : null,
    context: path.join(__dirname),
    entry: './src/js/root.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            //下面是使用 ant-design 的配置文件
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 sourceMap:true
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins: (loader) => [
            //                     require('autoprefixer')()
            //                 ],
            //                 sourceMap:true
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            root: path.resolve(__dirname, 'dist')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8*1024,  //8k一下的转义为base64
                        name:'images/[name].[ext]'
                    }
                }]
            },
            // {
            //     test: /\.(htm|html)$/,
            //     use: 'html-withimg-loader'
            // }
        ]
    },

    devServer: {//配置开发服务器
        contentBase: path.join(__dirname, "dist"),//start path//静态文件根目录
        compress: true,// 服务器返回浏览器的时候是否启动gzip压缩
        port: 9000,
        hot: true,
        inline: true
    },

    optimization: {
        // runtimeChunk: true
    },

    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        new HtmlWebPackPlugin({
            minify:{
                collapseWhitespace:true
            },
            title:"首页",
            template: path.join(__dirname , "./index.html"),
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            // chunkFilename: "[id].css"
        }),
        // new CleanWebpackPlugin(['dist'])
    ]
};
