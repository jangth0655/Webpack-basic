class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", (state) => {
      console.log("MyWebpackPlugin: done");
    });
    // 웹팩이 번들링한 결과물에 접근할 수 있는걸 알 수 있다.
    compiler.hooks.emit.tapAsync("My Plugin", (compilation, callback) => {
      console.log(
        "compilation.assets['main.js']",
        compilation.assets["main.js"].source()
      );

      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
