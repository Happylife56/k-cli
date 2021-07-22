module.exports = {
  extends: "stylelint-config-sass-guidelines",
  rules: {
    "selector-max-id": 2,
    "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin"] }],
    "selector-max-compound-selectors": 4, // 允许伪类嵌套4层
    "max-nesting-depth": [
      4,
      {
        ignore: ["pseudo-classes", "blockless-at-rules"]
      }
    ],
    "selector-class-pattern": null, // 允许下划线以及其他类型 __
    "declaration-property-value-disallowed-list": {
      "unprefixed-property-name": ["/^border/", "^color",] //允许样式覆盖
    }
  }
};
