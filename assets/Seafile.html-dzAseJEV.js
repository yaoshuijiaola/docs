import{_ as a,r as d,o,c as r,a as i,f as c}from"./app-HDRrVlgJ.js";const n={},t=c('<h1 id="seafile" tabindex="-1"><a class="header-anchor" href="#seafile" aria-hidden="true">#</a> Seafile</h1><p>Seafile 是以资料库为单位进行版本控制和同步的开源云盘。</p><p>使用本驱动可以挂载 Seafile 的资料库到 Alist，已支持访问加密资料库。</p><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><p>1、如果未设置资料库ID（RepoId），则该配置可指定要访问的资料库的名称与子路径，默认为根路径：<code>/</code>，表示展示所有资料库。假设你有一个资料库名为 <code>example</code>，如果你只想挂载该资料库的内容，可以将本项设为 <code>/example</code>；如果你只想展示该资料库内一个名为 <code>abc</code> 的目录，则可以将本项设置为 <code>/example/abc</code> ，以此类推。</p><p>2、如果设置了资料库ID（RepoId），则该配置用来设置指定资料库内的目录，默认为根目录：<code>/</code>。</p><h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址" aria-hidden="true">#</a> <strong>地址</strong></h2><p>你的 Seafile 服务器地址，形如：</p><ul><li><code>https://seacloud.cc</code></li><li><code>http://192.168.1.24:8000</code></li></ul><h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名" aria-hidden="true">#</a> <strong>用户名</strong></h2><p>用于登录你的 Seafile 服务器的邮箱或用户名。</p><h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> <strong>密码</strong></h2><p>邮箱或用户名对应的密码。</p><h2 id="repoid-资料库id" tabindex="-1"><a class="header-anchor" href="#repoid-资料库id" aria-hidden="true">#</a> <strong>RepoId（资料库ID）</strong></h2><p>Seafile 资料库ID，形如：<code>86fc6316-3f2a-4c64-b6f5-d4d2b341bc9a</code></p><blockquote><p>在浏览器中打开Seafile资料库，即可在地址栏中看到资料库ID。</p></blockquote><p>可留空不填，不填则展示指定账号所有可见的资料库。</p><h2 id="repopwd-资料库密码" tabindex="-1"><a class="header-anchor" href="#repopwd-资料库密码" aria-hidden="true">#</a> <strong>RepoPwd（资料库密码）</strong></h2><p>设置用来访问加密资料库的密码，如果没有加密资料库请留空。</p><p>配置该项后 Alist 将会用此密码访问指定账号所有已加密的资料库，不会影响未加密资料库的访问。如果你有多个加密资料库使用了相同的密码则均可以正常访问。</p><p>暂不支持在一个存储内对不同的资料库配置不同的密码进行访问，如果你有这种需求，可以添加多个 Seafile 存储来实现，这样就可以对不同的加密资料库指定不同的密码进行访问。</p><blockquote><p>如果设置了资料库密码后仍无法访问加密资料库内的文件，请检查密码及上面的其他配置是否有误，建议修改此密码配置后重新启动 Alist，避免缓存的影响。</p></blockquote><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',23);function s(h,l){const e=d("Mermaid");return o(),r("div",null,[t,i(e,{id:"mermaid-82",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const f=a(n,[["render",s],["__file","Seafile.html.vue"]]);export{f as default};
