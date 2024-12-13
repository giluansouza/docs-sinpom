"use strict";(self.webpackChunkdocs_sinpom=self.webpackChunkdocs_sinpom||[]).push([[2649],{2752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"introduction/database-structure","title":"Estrutura do Banco de Dados","description":"Overview","source":"@site/docs/introduction/database-structure.md","sourceDirName":"introduction","slug":"/introduction/database-structure","permalink":"/docs-sinpom/pt/docs/introduction/database-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/database-structure.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docSidebar","previous":{"title":"Estrutura do Projeto","permalink":"/docs-sinpom/pt/docs/introduction/project-structure"},"next":{"title":"Configura\xe7\xe3o","permalink":"/docs-sinpom/pt/docs/configuration"}}');var n=r(4848),i=r(8453);const d={sidebar_position:4},a="Estrutura do Banco de Dados",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Tabelas Principais",id:"tabelas-principais",level:2},{value:"Principais Relacionamentos",id:"principais-relacionamentos",level:2},{value:"ER Diagram",id:"er-diagram",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"estrutura-do-banco-de-dados",children:"Estrutura do Banco de Dados"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"O banco de dados do SINPOM \xe9 a espinha dorsal do sistema, permitindo armazenamento e a recupera\xe7\xe3o de dados criticos da plataforma, incluindo contas de usu\xe1rios, fun\xe7\xf5es, logs de acesso e entidades espec\xedficas. Ele usa o MySQL como sgbd, e foi projetado para funcionar perfeitamente com o ORM do Laravel (Eloquent) e \xe9 estruturado para se alinhar \xe0 arquitetura MVC."}),"\n",(0,n.jsx)(t.h2,{id:"tabelas-principais",children:"Tabelas Principais"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"users"})}),": Gerencia detalhes da conta do usu\xe1rio"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field Name"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"INT"}),(0,n.jsx)(t.td,{children:"Primary key, auto-increment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"VARCHAR(255)"}),(0,n.jsx)(t.td,{children:"User's full name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"email"}),(0,n.jsx)(t.td,{children:"VARCHAR(255)"}),(0,n.jsx)(t.td,{children:"Unique email address."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"email_verified_at"}),(0,n.jsx)(t.td,{children:"TIMESTAMP"}),(0,n.jsx)(t.td,{children:"Email verification timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"password"}),(0,n.jsx)(t.td,{children:"VARCHAR(255)"}),(0,n.jsx)(t.td,{children:"Encrypted password."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"remember_token"}),(0,n.jsx)(t.td,{children:"VARCHAR(100)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"google2fa_secret"}),(0,n.jsx)(t.td,{children:"VARCHAR(255)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"created_at"}),(0,n.jsx)(t.td,{children:"TIMESTAMP"}),(0,n.jsx)(t.td,{children:"Record creation timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"updated_at"}),(0,n.jsx)(t.td,{children:"TIMESTAMP"}),(0,n.jsx)(t.td,{children:"Record last update timestamp."})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"roles"})}),": Tabela de fun\xe7\xf5es do SINPOM."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"principais-relacionamentos",children:"Principais Relacionamentos"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Em breve"})}),"\n",(0,n.jsx)(t.h2,{id:"er-diagram",children:"ER Diagram"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Em breve"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var s=r(6540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);