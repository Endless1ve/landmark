const path = require('path'); //путь
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const WebpackMd5Hash = require('webpack-md5-hash'); //хэширование файлов
 

module.exports = {
    entry: { main: './src/index.js' }, //точка входа
    output: { //точка выхода
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true
    },
    mode: 'development',
    module: {
        rules: [{ 
                    test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                    use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                    exclude: /node_modules/ // исключает папку node_modules
                },
                {
                    test: /\.css$/,
                    use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                } 
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css'
            }),
            new HtmlWebpackPlugin({
                inject: false, // стили НЕ нужно прописывать внутри тегов
                template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
                filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
              })
        ]
}