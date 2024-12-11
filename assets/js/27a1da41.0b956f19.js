"use strict";(self.webpackChunkdocs_sinpom=self.webpackChunkdocs_sinpom||[]).push([[7228],{4710:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"configuration/migrations","title":"Migrations e seeds","description":"Executar as migra\xe7\xf5es e popular o banco de dados.","source":"@site/docs/configuration/migrations.md","sourceDirName":"configuration","slug":"/configuration/migrations","permalink":"/docs-sinpom/docs/configuration/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/migrations.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docSidebar","previous":{"title":"Instalar depend\xeancias","permalink":"/docs-sinpom/docs/configuration/install-dependencies"},"next":{"title":"Proxy/Proxy Reverso","permalink":"/docs-sinpom/docs/configuration/proxy"}}');var a=n(4848),i=n(8453);const r={sidebar_position:3},t="Migrations e seeds",d={},c=[{value:"Migra\xe7\xf5es",id:"migra\xe7\xf5es",level:2},{value:"Populando o banco de dados",id:"populando-o-banco-de-dados",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"migrations-e-seeds",children:"Migrations e seeds"})}),"\n",(0,a.jsx)(o.p,{children:"Executar as migra\xe7\xf5es e popular o banco de dados."}),"\n",(0,a.jsx)(o.h2,{id:"migra\xe7\xf5es",children:"Migra\xe7\xf5es"}),"\n",(0,a.jsx)(o.p,{children:"Criando as tabelas no banco de dados."}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"php artisan migrate"})," deve ser executado dentro do container do portal sinpom"]})}),"\n",(0,a.jsx)(o.p,{children:"Execute o comando abaixo para executar a migra\xe7\xf5es do banco de dados."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:'docker exec -it sinpom-web bash -c "php artisan migrate"\n'})}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode verificar se o sistema est\xe1 funcionando corretamente, acesse o portal sinpom em:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"https://sinpom.docker.localhost",children:"https://sinpom.docker.localhost"})}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"populando-o-banco-de-dados",children:"Populando o banco de dados"}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsxs)(o.strong,{children:["php artisan db",":seed"]})," deve ser executado dentro do container do portal sinpom"]})}),"\n",(0,a.jsx)(o.p,{children:"Execute o comando abaixo para popular o banco de dados."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:'docker exec -it sinpom-web bash -c "php artisan db:seed"\n'})})]})}function l(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>t});var s=n(6540);const a={},i=s.createContext(a);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);