const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/ts/index.ts",
        styles: "./src/scss/styles.scss",
    },
    output: {
        filename: "resources/[name].js",
        path: path.resolve(__dirname, "docs"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "resources/[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/html/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "productos.html",
            template: "src/html/productos.html",
        }),
        new HtmlWebpackPlugin({
            filename: "servicio-al-cliente.html",
            template: "src/html/servicio-al-cliente.html",
        }),
        new HtmlWebpackPlugin({
            filename: "ingresar.html",
            template: "src/html/ingresar.html",
        }),
        new HtmlWebpackPlugin({
            filename: "registrate.html",
            template: "src/html/registrate.html",
        }),
        new HtmlWebpackPlugin({
            filename: "cuenta.html",
            template: "src/html/cuenta.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/images",
                    to: "images",
                },
                {
                    from: "src/favicons",
                    to: ".",
                },
            ],
        }),
    ],
    devServer: {
        static: "./docs",
        port: 3000,
        open: false,
    },
};
