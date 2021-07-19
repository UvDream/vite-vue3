module.exports = {
    types: [
      {
        value: "feat",
        name: "功能: 是指开发新功能"
      },
      {
        value: "fix",
        name: "修复（合并冲突）: 是指修复bug，合并冲突"
      },
      // {
      //   value: 'wip',
      //   name: '开发中(WIP): 是指开发中...'
      // },
      {
        value: "ci",
        name: "发布构建(CI): 是指构建发布包"
      },
      {
        value: "revert",
        name: "回滚: 是指回滚到某次提交"
      },
      {
        value: "docs",
        name: "文档: 是指调整文档"
      },
      {
        value: "style",
        name: "格式: 是指代码格式化(如增删某个空格, 补充行末分号，代码换行等)"
      },
      {
        value: "refactor",
        name: "重构: 是指没有修复bug，没有新增功能"
      },
      {
        value: "perf",
        name: "性能: 是指优化产品性能"
      },
      {
        value: "test",
        name: "测试: 是指新增测试用例"
      },
      {
        value: "chore",
        name: "流程: 是指调整构建流程，改变构建工具，包括所有涉及到的工程化变化"
      }
    ],
  
    scopes: [
      {
        name: "合并冲突"
      },
      {
        name: "公共模块"
      },
      {
        name: "授权模块"
      },
      {
        name: "客户模块"
      },
      {
        name: "其他"
      }
    ],
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: "TICKET-",
    ticketNumberRegExp: "\\d{1,5}",
  
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
      type: "选择一种你的提交类型:",
      scope: "\n请告知修改范围 (可选,如无请按回车继续):",
      // used if allowCustomScopes is true
      customScope: "请输入修改范围:",
      subject: "短说明:\n",
      body: "描述提交内容 (可选，如无请按回车继续，如需换行，请使用 '|'):\n",
      breaking: "此次提交是否涉及到代码兼容性，如有请说明(可选，如无请按回车继续):\n",
      footer: "关联此次提交关闭的issue，如有请说明（如 #31, #34）(可选，如无请按回车继续):\n",
      confirmCommit: "确定提交说明（Y/N）?"
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"],
    // skip any questions you want
    skipQuestions: ["body"],
  
    // limit subject length
    subjectLimit: 100
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  }
  /*
   * 详细可参考Angular提交格式https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
   */
  