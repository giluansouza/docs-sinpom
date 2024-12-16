"use strict";(self.webpackChunkdocs_sinpom=self.webpackChunkdocs_sinpom||[]).push([[1685],{6786:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"setup/environment-config","title":"Configura\xe7\xe3o do Ambiente","description":"Clonando o Reposit\xf3rio","source":"@site/docs/setup/environment-config.md","sourceDirName":"setup","slug":"/setup/environment-config","permalink":"/docs-sinpom/pt/docs/setup/environment-config","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/environment-config.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docSidebar","previous":{"title":"Configura\xe7\xe3o","permalink":"/docs-sinpom/pt/docs/configuration"},"next":{"title":"Instalar depend\xeancias","permalink":"/docs-sinpom/pt/docs/setup/dependency-installation"}}');var r=o(4848),i=o(8453);const c={sidebar_position:1},a="Configura\xe7\xe3o do Ambiente",d={},t=[{value:"Clonando o Reposit\xf3rio",id:"clonando-o-reposit\xf3rio",level:3},{value:"Configura\xe7\xe3o do Docker",id:"configura\xe7\xe3o-do-docker",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configura\xe7\xe3o-do-ambiente",children:"Configura\xe7\xe3o do Ambiente"})}),"\n",(0,r.jsx)(n.h3,{id:"clonando-o-reposit\xf3rio",children:"Clonando o Reposit\xf3rio"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/sinpom/sinpom.git\ncd sinpom\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configura\xe7\xe3o-do-docker",children:"Configura\xe7\xe3o do Docker"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Copie o arquivo ",(0,r.jsx)(n.code,{children:".env.example"})," para ",(0,r.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Configure as vari\xe1veis de ambiente no arquivo ",(0,r.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Voc\xea pode usar o arquivo ",(0,r.jsx)(n.code,{children:".env.local"})," para configura\xe7\xe3o local do sinpom."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Inicie os containeres com o Docker Compose"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Para ambiente de desenvolvimento em Ubuntu:"})}),"\n",(0,r.jsx)(n.p,{children:"Criar containeres"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-dev-ubuntu.yml up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remover containeres"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-dev-ubuntu.yml down\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Para ambiente local:"})}),"\n",(0,r.jsx)(n.p,{children:"Criar containeres"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-local.yml up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remover containeres"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-local.yml down\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Use o arquivo ",(0,r.jsx)(n.code,{children:"docker-compose-local.yml"})," para configura\xe7\xe3o local do sinpom ou use ",(0,r.jsx)(n.code,{children:"docker-compose-dev-ubuntu.yml"})," para ambiente de desenvolvimento em Ubuntu(#)."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Para ambiente em produ\xe7\xe3o:"})}),"\n",(0,r.jsx)(n.p,{children:"Criar containeres"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-producao.yml up -d\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var s=o(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);