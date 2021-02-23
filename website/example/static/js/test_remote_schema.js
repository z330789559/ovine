(function () {
  window.ovine.addPageSchemaJs('/application/remote_schema', {
    schema: {
      type: 'page',
      title: '本页面是通过异步加载JS来实现渲染的',
      remark: '可以通过接口或其他方式，获取本页面Schema JS 并进行渲染，可以动态修改页面而不需要构建打包。',
      body: {
        type: 'lib-crud',
        api: '$preset.apis.list',
        filter: '$preset.forms.filter',
        filterTogglable: true,
        perPageAvailable: [50, 100, 200],
        defaultParams: {
          size: 50,
        },
        perPageField: 'size',
        pageField: 'page',
        headerToolbar: [
          'filter-toggler',
          {
            type: 'columns-toggler',
            align: 'left',
          },
          {
            type: 'pagination',
            align: 'left',
          },
          '$preset.actions.add',
        ],
        footerToolbar: ['statistics', 'switch-per-page', 'pagination'],
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            width: 80,
          },
          {
            name: 'desc',
            label: '描述',
            type: 'text',
          },
          {
            name: 'createTime',
            label: '创建时间',
            type: 'datetime',
            width: 150,
          },
          {
            name: 'updateTime',
            label: '更新时间',
            type: 'datetime',
            width: 150,
          },
          {
            type: 'operation',
            label: '操作',
            width: 60,
            limits: ['edit', 'del'],
            limitsLogic: 'or', // 满足 limits列表中 一个权限即可渲染
            buttons: ['$preset.actions.edit', '$preset.actions.del'],
          },
        ],
      },
      definitions: {
        updateControls: {
          controls: [{
              name: 'desc',
              required: true,
              label: '配置描述',
              type: 'text',
            },
            {
              name: 'content',
              label: 'JSON配置',
              type: 'json-editor',
            },
          ],
        },
      },
      preset: {
        actions: {
          add: {
            limits: 'add',
            type: 'button',
            align: 'right',
            actionType: 'dialog',
            label: '添加',
            icon: 'fa fa-plus pull-left',
            size: 'sm',
            primary: true,
            dialog: {
              title: '新增配置',
              size: 'lg',
              body: {
                type: 'form',
                api: '$preset.apis.add',
                mode: 'normal',
                $ref: 'updateControls',
              },
            },
          },
          edit: {
            limits: 'edit',
            type: 'button',
            icon: 'fa fa-pencil',
            tooltip: '编辑配置',
            actionType: 'dialog',
            dialog: {
              title: '编辑',
              size: 'lg',
              body: {
                type: 'form',
                mode: 'normal',
                api: '$preset.apis.edit',
                $ref: 'updateControls',
              },
            },
          },
          del: {
            limits: 'del',
            type: 'button',
            icon: 'fa fa-times text-danger',
            actionType: 'ajax',
            tooltip: '删除',
            confirmText: '您确认要删除?',
            api: '$preset.apis.del',
            messages: {
              success: '删除成功',
              failed: '删除失败',
            },
          },
        },
        forms: {
          filter: {
            controls: [{
                type: 'date-range',
                name: 'dateRange',
                label: '创建时间范围',
                format: 'YYYY-MM-DD',
              },
              {
                type: 'submit',
                className: 'm-l',
                label: '搜索',
              },
            ],
          },
        },
        limits: {
          $page: {
            label: '查看列表',
          },
          add: {
            label: '添加',
          },
          edit: {
            label: '编辑',
          },
          del: {
            label: '删除',
          },
        },
        apis: {
          list: {
            url: 'GET ovapi/document/item',
            limits: '$page',
            // 测试字符串回调
            onPreRequest: `
                const { dateRange } = option.data
                if (dateRange) {
                  const arr = dateRange.split('%2C')
                  option.data = {
                    ...option.data,
                    startDate: arr[0],
                    endDate: arr[1],
                  }
                }
                return option
             `,
          },
          add: {
            url: 'POST ovapi/document/item',
            limits: 'add',
          },
          edit: {
            url: 'PUT ovapi/document/item/$id',
            limits: 'edit',
          },
          del: {
            url: 'DELETE ovapi/document/item/$id',
            limits: 'del',
          },
        },
      },
    }
  })
})()
