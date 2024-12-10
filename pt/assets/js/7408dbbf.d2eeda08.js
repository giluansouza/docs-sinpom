"use strict";(self.webpackChunkdocs_sinpom=self.webpackChunkdocs_sinpom||[]).push([[7316],{8742:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"introduction/infraestructure","title":"Infraestrutura do projeto","description":"Instala\xe7\xe3o da Infraestrutura","source":"@site/docs/introduction/infraestructure.md","sourceDirName":"introduction","slug":"/introduction/infraestructure","permalink":"/docs-sinpom/pt/docs/introduction/infraestructure","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/infraestructure.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Requisitos do sinpom","permalink":"/docs-sinpom/pt/docs/introduction/requirements"},"next":{"title":"Configura\xe7\xe3o","permalink":"/docs-sinpom/pt/docs/configuration"}}');var s=r(4848),t=r(8453);const c={},i="Infraestrutura do projeto",a={},d=[{value:"Instala\xe7\xe3o da Infraestrutura",id:"instala\xe7\xe3o-da-infraestrutura",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"infraestrutura-do-projeto",children:"Infraestrutura do projeto"})}),"\n",(0,s.jsx)(n.h2,{id:"instala\xe7\xe3o-da-infraestrutura",children:"Instala\xe7\xe3o da Infraestrutura"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Instale o Docker e o Docker Compose"}),"\n",(0,s.jsx)(n.li,{children:"Instale o Traefik"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Voc\xea pode criar um arquivo ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," para configura\xe7\xe3o do Traefik, fora do diret\xf3rio do sinpom e ent\xe3o gerencia-lo com o Docker Compose."]}),"\n",(0,s.jsxs)(n.p,{children:["Exemplo de arquivo ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," para configura\xe7\xe3o do Traefik:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'networks:\n  proxy:\n    external: true\n\nservices:\n  traefik:\n    image: traefik:v2.10\n    container_name: sinpom-traefik\n    command:\n      - "--providers.docker=true"\n      - "--providers.docker.exposedbydefault=false"\n      - "--entrypoints.web.address=:80"\n      - "--entrypoints.websecure.address=:443"\n      - "--log.level=DEBUG"\n      - "--api.insecure=true"\n      - "--entrypoints.websecure.http.tls=true"\n      - "--providers.file.filename=/etc/traefik/dynamic.yml"\n    ports:\n      - "80:80"\n      - "443:443"\n      - "8099:8080"\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock:ro"\n      - "./certs:/certs"\n      - "./traefik-dynamic-config.yml:/etc/traefik/dynamic.yml"\n    networks:\n      - proxy\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Use um arquivo ",(0,s.jsx)(n.code,{children:"traefik-dynamic-config.yml"})," para configura\xe7\xe3o do Traefik. Exemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"tls:\n  certificates:\n    - certFile: /certs/cert.cert\n      keyFile: /certs/cert.key\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Clone o repositorio do sinpom"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/sinpom/sinpom.git\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Arquivo ",(0,s.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Copie o arquivo ",(0,s.jsx)(n.code,{children:".env"})," correspondente ao ambiente de desenvolvimento e renomeie."]}),"\n",(0,s.jsx)(n.p,{children:"Exemplo no terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sinpom\ncp .env.local .env\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Docker Compose"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Agora voc\xea pode executar o Docker Compose para criar os servi\xe7os com o comando:"}),"\n",(0,s.jsxs)(n.p,{children:["Use o arquivo ",(0,s.jsx)(n.code,{children:"docker-compose-local.yml"})," para configura\xe7\xe3o local do sinpom ou use ",(0,s.jsx)(n.code,{children:"docker-compose-dev-ubuntu.yml"})," para ambiente de desenvolvimento em Ubuntu."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose-local.yml up -d\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var o=r(6540);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);