import path from 'path';

export default {
    context: path.resolve(__dirname),
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            include: [path.join(__dirname,'src')]
        },{
            test: /\.css/,
            loader: 'style-loader!css-loader',
        }]
    },
    devServer: {
        inline:true,
    }
}