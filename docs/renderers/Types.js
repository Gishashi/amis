define('docs/renderers/Types.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E\" href=\"#%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>类型说明</h2><h3><a class=\"anchor\" name=\"container\" href=\"#container\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Container</h3><p>Container 不是一个特定的渲染器，而是 amis 中一个特殊类型，它是以下类型的任何一种。</p>\n<ul>\n<li><code>String</code> 字符串，可以包含 <code>html</code> 片段。</li>\n<li><code>Object</code> 指定一个渲染器如： <code>{&quot;type&quot;: &quot;button&quot;, &quot;label&quot;: &quot;按钮&quot;}</code></li>\n<li><code>Array</code> 还可以是一个数组，数组的成员可以就是一个 <code>Container</code>.</li>\n</ul>\n<p>示例:</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"container\"</span>: <span class=\"hljs-string\">\"普通一段字符串\"</span>\n}\n</code></pre>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"container\"</span>: {\n        <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"button\"</span>,\n        <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"按钮\"</span>\n    }\n}\n</code></pre>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"container\"</span>: [\n        <span class=\"hljs-string\">\"普通一段字符串\"</span>,\n\n        {\n            <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"button\"</span>,\n            <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"按钮\"</span>\n        },\n\n        [<span class=\"hljs-string\">\"普通一段字符串\"</span>, <span class=\"hljs-string\">\"普通一段字符串\"</span>]\n    ]\n}\n</code></pre>\n<h3><a class=\"anchor\" name=\"api\" href=\"#api\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>API</h3><p>Api 类型可以是字符串或者对象。API 中可以直接设置数据发送结构，注意看示例。</p>\n<ul>\n<li><p><code>String</code> <code>[&lt;type&gt;:]&lt;url&gt;</code></p>\n<ul>\n<li><code>&lt;type&gt;</code> 可以是： <code>get</code>、<code>post</code>、<code>put</code>、<code>delete</code>或者<code>raw</code></li>\n<li><code>&lt;url&gt;</code> 即 api 地址，支持通过 <code>$key</code> 取变量。</li>\n</ul>\n<p>如：</p>\n<pre><code>  * `<span class=\"hljs-string\">get:</span><span class=\"hljs-string\">http:</span><span class=\"hljs-comment\">//imis.tieba.baidu.com/yule/list?start=$startTime&amp;end=$endTime`</span>\n  * `<span class=\"hljs-string\">get:</span><span class=\"hljs-string\">http:</span><span class=\"hljs-comment\">//imis.tieba.baidu.com/yule/list?$$` 拿所有可用数据。</span>\n  * `<span class=\"hljs-string\">get:</span><span class=\"hljs-string\">http:</span><span class=\"hljs-comment\">//imis.tieba.baidu.com/yule/list?data=$$` 拿所有可用数据。</span>\n</code></pre></li>\n<li><p><code>Object</code></p>\n<ul>\n<li><code>url</code> api 地址</li>\n<li><code>method</code> 可以是：<code>get</code>、<code>post</code>、<code>put</code>或者<code>delete</code></li>\n<li><code>data</code> 数据体</li>\n<li><code>headers</code> 头部，配置方式和 data 配置一样，下面不详讲。如果要使用，请前往群组系统配置中，添加允许。</li>\n</ul>\n<p>如：</p>\n<p>取某个变量。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"http://imis.tieba.baidu.com/yule/list\"</span>,\n    <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n    <span class=\"hljs-attr\">\"data\"</span>: {\n        <span class=\"hljs-attr\">\"start\"</span>: <span class=\"hljs-string\">\"$startTime\"</span>\n    }\n}\n</code></pre>\n<p>直接将所有可用数据映射给 all 变量。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"http://imis.tieba.baidu.com/yule/list\"</span>,\n    <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n    <span class=\"hljs-attr\">\"data\"</span>: {\n        <span class=\"hljs-attr\">\"all\"</span>: <span class=\"hljs-string\">\"$$\"</span>\n    }\n}\n</code></pre>\n<p>正常如果指定了 data，则只会发送 data 指定的数据了，如果想要保留原有数据，只定制修改一部分。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-string\">\"url\"</span>: <span class=\"hljs-string\">\"http://imis.tieba.baidu.com/yule/list\"</span>,\n    <span class=\"hljs-string\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n    <span class=\"hljs-string\">\"data\"</span>: {\n        <span class=\"hljs-string\">\"&amp;\"</span>: <span class=\"hljs-string\">\"$$\"</span>, // 原来的数据先 copy 过来。\n        <span class=\"hljs-string\">\"a\"</span>: <span class=\"hljs-string\">\"123\"</span>,\n        <span class=\"hljs-string\">\"b\"</span>: <span class=\"hljs-string\">\"${b}\"</span>\n    }\n}\n</code></pre>\n<p>如果目标变量是数组，而发送的数据，有不希望把成员全部发送过去，可以这样配置。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"http://imis.tieba.baidu.com/yule/list\"</span>,\n    <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n    <span class=\"hljs-attr\">\"data\"</span>: {\n        <span class=\"hljs-attr\">\"all\"</span>: {\n            <span class=\"hljs-attr\">\"$rows\"</span>: {\n                <span class=\"hljs-attr\">\"a\"</span>: <span class=\"hljs-string\">\"$a\"</span>,\n                <span class=\"hljs-attr\">\"b\"</span>: <span class=\"hljs-string\">\"$b\"</span>\n            }\n        }\n    }\n}\n</code></pre>\n<p>如果 \\$rows 的结构为 <code>[{a: 1, b: 2, c: 3, d: 4}, {a: 1, b: 2, c: 3, d: 4}]</code>, 经过上述映射后，实际发送的数据为 <code>{all: [{a: 1, b:2}, {a: 1, b: 2}]}</code></p>\n</li>\n</ul>\n<p><strong> 注意 </strong></p>\n<p>amis 所有值为 url 的如： <code>&quot;http://www.baidu.com&quot;</code> 都会被替换成 proxy 代理，如果不希望这么做，请明确指示如： <code>&quot;raw:http://www.baidu.com&quot;</code>。还有为了安全，amis 默认只能转发公司内部 API 接口，如果您的接口在外网环境，也请明确指示如：<code>&quot;external:http://www.baidu.com&quot;</code></p>\n<h3><a class=\"anchor\" name=\"%E8%A1%A8%E8%BE%BE%E5%BC%8F\" href=\"#%E8%A1%A8%E8%BE%BE%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表达式</h3><p>配置项中，所有 <code>boolean</code> 类型的配置，都可以用 JS 表达式来配置。所有<code>boolean</code> 配置项，后面加个 <code>On</code> 则是表达式配置方式，可以用 js 语法来根据当前模型中的数据来决定是否启用。\n如：<a href=\"/docs/renderers/FormItem\">FormItem</a> 中的 <code>disabledOn</code>、<code>hiddenOn</code>、<code>visibleOn</code>、<a href=\"/docs/renderers/CRUD\">CRUD</a> 中的 <code>itemDraggableOn</code> 等等。</p>\n<div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"form\">[\n    {\n        \"type\": \"radios\",\n        \"name\": \"foo\",\n        \"inline\": true,\n        \"label\": \" \",\n        \"options\": [\n            {\n                \"label\": \"类型1\",\n                \"value\": 1\n            },\n            {\n                \"label\": \"类型2\",\n                \"value\": 2\n            },\n            {\n                \"label\": \"类型3\",\n                \"value\": 3\n            }\n        ]\n    },\n\n    {\n        \"type\": \"text\",\n        \"name\": \"text\",\n        \"placeholder\": \"类型1 可见\",\n        \"visibleOn\": \"data.foo == 1\"\n    },\n\n     {\n         \"type\": \"text\",\n         \"name\": \"text2\",\n         \"placeholder\": \"类型2 不可点\",\n         \"disabledOn\": \"data.foo == 2\"\n     },\n\n   {\n       \"type\": \"button\",\n       \"label\": \"类型三不能提交\",\n       \"level\": \"primary\",\n       \"disabledOn\": \"data.foo == 3\"\n   }\n\n]\n</script></div>\n<p>为了能加入权限控制，表达是中允许可以用 <code>acl.can</code> 方法来检测当前用户是否拥有某个权限。\n如： <code>{&quot;disabledOn&quot;: &quot;!can(&#39;some-resource&#39;)&quot;}</code>。权限能力部分，请前往<a href=\"/docs/manual#%E8%83%BD%E5%8A%9B%E7%AE%A1%E7%90%86\">能力管理</a>，\n权限配置请前往<a href=\"/docs/manual#%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE\">权限配置</a>管理。</p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "类型说明",
          "fragment": "%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
          "fullPath": "#%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
          "level": 2,
          "children": [
            {
              "label": "Container",
              "fragment": "container",
              "fullPath": "#container",
              "level": 3
            },
            {
              "label": "API",
              "fragment": "api",
              "fullPath": "#api",
              "level": 3
            },
            {
              "label": "表达式",
              "fragment": "%E8%A1%A8%E8%BE%BE%E5%BC%8F",
              "fullPath": "#%E8%A1%A8%E8%BE%BE%E5%BC%8F",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
