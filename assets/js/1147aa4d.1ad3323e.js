"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2322],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,u=d["".concat(c,".").concat(m)]||d[m]||_[m]||s;return r?t.createElement(u,a(a({ref:n},p),{},{components:r})):t.createElement(u,a({ref:n},p))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8805:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>_,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const s={sidebar_position:5},a="\ub9e5\ubbf8\ub2c8(Mac Server) \uc6b4\uc6a9 \ubc29\ubc95 - 4",i={unversionedId:"g-devops/common/dvop-c004",id:"g-devops/common/dvop-c004",title:"\ub9e5\ubbf8\ub2c8(Mac Server) \uc6b4\uc6a9 \ubc29\ubc95 - 4",description:"CodeServer - Nginx + https \uc124\uc815",source:"@site/docs/g-devops/common/dvop-c004.md",sourceDirName:"g-devops/common",slug:"/g-devops/common/dvop-c004",permalink:"/docs/g-devops/common/dvop-c004",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-devops/common/dvop-c004.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"DevOps",previous:{title:"\ub9e5\ubbf8\ub2c8(Mac Server) \uc6b4\uc6a9 \ubc29\ubc95 - 3",permalink:"/docs/g-devops/common/dvop-c003"}},c={},l=[{value:"CodeServer - Nginx + https \uc124\uc815",id:"codeserver---nginx--https-\uc124\uc815",level:2},{value:"1. nginx \uc124\uce58",id:"1-nginx-\uc124\uce58",level:3},{value:"\uc124\uc815\ud30c\uc77c\uc5d0\uc11c 80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778 \ud574\ubcf4\uc790.",id:"\uc124\uc815\ud30c\uc77c\uc5d0\uc11c-80-\ud3ec\ud2b8\ub85c-\ubcc0\uacbd\ud574\uc11c-nginx\uc811\uadfc\uc774-\ub418\ub294\uc9c0-\ud655\uc778-\ud574\ubcf4\uc790",level:4},{value:"2. \ub3c4\uba54\uc778(\uac00\ube44\uc544) &gt; DNS \ub808\ucf54\ub4dc \uc218\uc815",id:"2-\ub3c4\uba54\uc778\uac00\ube44\uc544--dns-\ub808\ucf54\ub4dc-\uc218\uc815",level:3},{value:"3. \uc778\uc99d\uc11c \ubc1c\uae09",id:"3-\uc778\uc99d\uc11c-\ubc1c\uae09",level:3},{value:"4. \uc778\uc99d\uc11c \uac31\uc2e0",id:"4-\uc778\uc99d\uc11c-\uac31\uc2e0",level:3},{value:"cron job",id:"cron-job",level:4},{value:"\ucd5c\uc885 nginx.conf",id:"\ucd5c\uc885-nginxconf",level:2},{value:"\uc608) \ucd5c\uc885 nginx.conf (code-server)",id:"\uc608-\ucd5c\uc885-nginxconf-code-server",level:2},{value:"\uc608) \ucd5c\uc885 nginx.conf (ghost cms)",id:"\uc608-\ucd5c\uc885-nginxconf-ghost-cms",level:2},{value:"ref",id:"ref",level:2}],p={toc:l},d="wrapper";function _(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ub9e5\ubbf8\ub2c8mac-server-\uc6b4\uc6a9-\ubc29\ubc95---4"},"\ub9e5\ubbf8\ub2c8(Mac Server) \uc6b4\uc6a9 \ubc29\ubc95 - 4"),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"keywords",content:"Mac Server, \ub9e5\ubbf8\ub2c8 \uc11c\ubc84, \uc6b4\uc6a9"})),(0,o.kt)("h2",{id:"codeserver---nginx--https-\uc124\uc815"},"CodeServer - Nginx + https \uc124\uc815"),(0,o.kt)("h3",{id:"1-nginx-\uc124\uce58"},"1. nginx \uc124\uce58"),(0,o.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ucc38\uace0\ud574\uc11c nginx\ub97c MacOS\uc5d0 \uc124\uce58\ud55c\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#1 \ud328\ud0a4\uc9c0 \uc124\uce58\nbrew install nginx \n\n#2 \uc11c\ube44\uc2a4 \uc2dc\uc791\nbrew services start nginx\n\n#3 \uc11c\ube44\uc2a4 \ubaa9\ub85d\nbrew services\n\n# \uc11c\ube44\uc2a4 \uc7ac\uc2dc\uc791\nbrew services restart nginx\n\n#4 8080\ud3ec\ud2b8 \uc811\uadfc\uc2dc nginx \ub3c4\ub2ec \ud655\uc778\ud558\uc790.\n> http://123.123.123.123:8080/\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"\uc124\uc815\ud30c\uc77c\uc5d0\uc11c-80-\ud3ec\ud2b8\ub85c-\ubcc0\uacbd\ud574\uc11c-nginx\uc811\uadfc\uc774-\ub418\ub294\uc9c0-\ud655\uc778-\ud574\ubcf4\uc790"},"\uc124\uc815\ud30c\uc77c\uc5d0\uc11c 80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778 \ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 1. nginx.conf \ud30c\uc77c \uacbd\ub85c \ud655\uc778\nbrew info nginx\n\n# 1.1 \uc544\ub798\ucc98\ub7fc \uc124\uc815\ud30c\uc77c \uacbd\ub85c\ub97c \ud655\uc778 \n...\nThe default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that\nnginx can run without sudo.\n...\n\n# 2. \uc124\uc815 \ud30c\uc77c \ubcc0\uacbd\n\uc124\uc815 \ud30c\uc77c \uacbd\ub85c : /opt/homebrew/etc/nginx/nginx.conf\n  - \ud3ec\ud2b8 8080 > 80 \ubcc0\uacbd\n\n#3. \uc11c\ube44\uc2a4 \uc7ac\uc2dc\uc791\nbrew services restart nginx\n\n#3 nginx \ub3c4\ub2ec \ud655\uc778 (port 80)\n> http://123.123.123.123/\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"2-\ub3c4\uba54\uc778\uac00\ube44\uc544--dns-\ub808\ucf54\ub4dc-\uc218\uc815"},"2. \ub3c4\uba54\uc778(\uac00\ube44\uc544) > DNS \ub808\ucf54\ub4dc \uc218\uc815"),(0,o.kt)("p",null,"my-coding.site \ub3c4\uba54\uc778\uc744 \uad6c\ub9e4 \ud6c4",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://www.my-coding.site"},"www.my-coding.site")," \ub3c4\uba54\uc778\uacfc \ub0b4 \ub9e5\ubbf8\ub2c8 \uc11c\ubc84\uc640 \uc5f0\uacb0\ud574\uc57c \ud55c\ub2e4.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#1 A \ud0c0\uc785\uc73c\ub85c \ub808\ucf54\ub4dc\ub97c \ucd94\uac00\ud55c\ub2e4. \n- eg) www.my-coding.site -> 123.123.123.123 \uc124\uc815\uc744 \uc6d0\ud55c\ub2e4\uba74\n- host:www\n- host \ub294 www \uc774\uba70 \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \ub73b\ud55c\ub2e4. \n\n# \ucc38\uace0)\n- eg) my-coding.site -> 123.123.123.123 \uc124\uc815\uc744 \uc6d0\ud55c\ub2e4\uba74\n- host:@\n- Note) host\uc5d0 @\uc740 \uc11c\ube0c\ub3c4\uba54\uc778\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc774\ub2e4.\n- \uc989, http://my-coding.site / \ub85c \uc811\uc18d\ud558\uba74 \uc9c0\uc815\ub41c IP\ub85c \uc774\ub3d9\ud55c\ub2e4.\n\n#2 nginx \ub3c4\ub2ec \ud655\uc778\n>http://www.my-coding.site \n\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"3-\uc778\uc99d\uc11c-\ubc1c\uae09"},"3. \uc778\uc99d\uc11c \ubc1c\uae09"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ukprog.tistory.com/125"},"https://ukprog.tistory.com/125")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 1. \uc778\uc99d\uc11c \ubc1c\uae09 \uc2dc\uc791\nsudo certbot certonly --manual \n\n(\uac00\ub2a5\ud558\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub85c nginx \uc124\uc815\uc744 \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ud558\uac8c\ub054 \ud558\uc790.)\nsudo certbot --nginx -d yourdomain.com\n\n\n# 2. \uc5f0\uacb0\ud560 \ub3c4\uba54\uc778 \uc785\ub825\nwww.my-coding.site\n\n# \ub3c4\uba54\uc778\uc5d0 \uc544\ub798 \ud30c\uc77c \uc11c\ube59\ud558\ub3c4\ub85d nginx \uc124\uc815 \ubcc0\uacbd\nCreate a file containing just this data:\nEmu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0\nAnd make it available on your web server at this URL:\nhttp://www.my-coding.site/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9\n\n\n# nginx.conf \ucd94\uac00\n---\n    server {\n        listen 80 ;\n        server_name www.my-coding.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n...\n\n--- \n\nmkdir -p .well-known/acme-challenge/\nvi Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8\nEmu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0  \uc785\ub825 \ud6c4 \uc800\uc7a5\n\n#3. nginx \uc7ac\uc2e4\ud589\nnginx -t # \ubb38\ubc95 \uac80\uc0ac\nbrew services restart nginx # \uc7ac\uc2dc\uc791 \n\n#4. cerbot \ud655\uc778 \ud6c4 \ubc1c\uae09 \uc131\uacf5\nSuccessfully received certificate.\nCertificate is saved at: /etc/letsencrypt/live/www.my-coding.site /fullchain.pem\nKey is saved at:         /etc/letsencrypt/live/www.my-coding.site /privkey.pem\nThis certificate expires on 2023-11-08.\nThese files will be updated when the certificate renews.\n\n\n#5. \uc778\uc99d\uc11c \uc77d\uae30 \uad8c\ud55c \ubb38\uc81c \ud574\uacb0\nsudo chmod -R 755 /etc/letsencrypt\n\n#6. https \ucc98\ub9ac\ud558\ub294 nginx.conf \ucd94\uac00\n\n---\n    server {\n        listen 443 ssl; \n        server_name www.my-coding.site; \n        ssl_certificate /etc/letsencrypt/live/www.my-coding.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/www.my-coding.site/privkey.pem; \n\n        # SSL \uc124\uc815 (\ucd5c\uc2e0 \ubcf4\uc548 \uad8c\uc7a5)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';\n        ssl_prefer_server_ciphers off;\n\n        # SSL \uc138\uc158 \uce90\uc2f1 \uc124\uc815\n        ssl_session_cache shared:SSL:10m;\n        ssl_session_timeout 1h;\n\n        location / {\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://127.0.0.1:3030/;\n        }   \n    }\n...\n\n")),(0,o.kt)("h3",{id:"4-\uc778\uc99d\uc11c-\uac31\uc2e0"},"4. \uc778\uc99d\uc11c \uac31\uc2e0"),(0,o.kt)("p",null,"sudo certbot certonly --manual \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud588\ub354\ub77c\uba74 \uc790\ub3d9\uc73c\ub85c \uac31\uc2e0\uc774 \ubd88\uac00\ub2a5 \ud558\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc778\uc99d\uc11c \uac31\uc2e0\uc744 \ud560\ub54c \uc0c8\ub85c\uc6b4 \ud30c\uc77c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[certbot]\n# \uc778\uc99d\uc11c \uc815\ubcf4 , \uc720\ud6a8\uae30\uac04, \uacbd\ub85c \ud655\uc778 \nsudo certbot certificates\n\n# \uc778\uc99d\uc11c \ubc1c\uae09\nsudo certbot --nginx -d yourdomain.com\nsudo certbot certonly --manual \n\n# \uc778\uc99d\uc11c \uac31\uc2e0 dry-run\nsudo certbot renew --dry-run\n\n# \uc778\uc99d\uc11c \uac31\uc2e0 (--apache, --nginx \ub4f1\uc73c\ub85c \uc790\ub3d9 \ubc1c\uae09\ud55c \uacbd\uc6b0)\nsudo certbot renew\n\n# \uc778\uc99d\uc11c \uac31\uc2e0 (--manual \ub85c \ubc1c\uae09\ud55c \uacbd\uc6b0)\nsudo certbot certonly --manual --dry-run -d www.your-domain.com\n- /opt/homebrew/etc/nginx\n\n")),(0,o.kt)("h4",{id:"cron-job"},"cron job"),(0,o.kt)("p",null,'echo "0 0,12 * * ',(0,o.kt)("em",{parentName:"p"}," root python -c 'import random; import time; time.sleep(random.random() ")," 3600)' && certbot renew -q\" | sudo tee -a /etc/crontab > /dev/null"),(0,o.kt)("h2",{id:"\ucd5c\uc885-nginxconf"},"\ucd5c\uc885 nginx.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    server {\n        listen 443 ssl; # managed by Certbot\n        server_name www.you-domain.site; # managed by Certbot\n        ssl_certificate /opt/homebrew/etc/nginx/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /opt/homebrew/etc/nginx/privkey.pem; # managed by Certbot\n        # SSL \uc124\uc815 \ucd94\uac00 (optional, \ucd94\ucc9c)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';\n        ssl_prefer_server_ciphers off;\n        ssl_session_timeout 1d;\n        ssl_session_cache shared:SSL:50m;\n\n        location / {\n            proxy_pass http://127.0.0.1:2229/;           \n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n        }   \n    }\n\n    server {\n        listen 80 ;\n        server_name www.you-domain.site;\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n\n    include servers/*;\n}\n")),(0,o.kt)("h2",{id:"\uc608-\ucd5c\uc885-nginxconf-code-server"},"\uc608) \ucd5c\uc885 nginx.conf (code-server)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    # vscode\n    server {\n        listen 443 ssl; \n        server_name code.coding-play.site; \n        ssl_certificate /etc/letsencrypt/live/code.coding-play.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/code.coding-play.site/privkey.pem; \n\n        # SSL \uc124\uc815 \ucd94\uac00 (optional, \ucd94\ucc9c)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';\n        # ssl_prefer_server_ciphers off;\n        # ssl_session_timeout 1d;\n        # ssl_session_cache shared:SSL:50m;\n\n\n        location / {\n            proxy_pass http://127.0.0.1:2229;           \n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n        }   \n    }\n\n    server {\n        listen 80 ;\n        server_name code.coding-play.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/XGNhDLRm4LMqNgFd3QC3RdI4mGM1ZedPYZiSt0nTCUY; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n\n    include servers/*;\n}\n\n# nginx -t\n# brew services restart nginx\n# sudo chmod -R 755 /etc/letsencrypt\n")),(0,o.kt)("h2",{id:"\uc608-\ucd5c\uc885-nginxconf-ghost-cms"},"\uc608) \ucd5c\uc885 nginx.conf (ghost cms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    # ghost cms - coding-play\n    server {\n        listen 80 ;\n        server_name wp.coding-play.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/GA8XfAQnDC7jp1kjtxMmzhUJ5RVeYWG0MbwfdnH1JXQ; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n            # proxy_pass http://127.0.0.1:8080;\n        }\n        # location ~ /.well-known {\n        #     allow all;\n        # }\n    }\n\n    server {\n        listen 443 ssl; \n        server_name wp.coding-play.site; \n        ssl_certificate /etc/letsencrypt/live/wp.coding-play.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/wp.coding-play.site/privkey.pem; \n\n        # SSL \uc124\uc815 (\ucd5c\uc2e0 \ubcf4\uc548 \uad8c\uc7a5)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers \'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384\';\n        ssl_prefer_server_ciphers off;\n\n        # SSL \uc138\uc158 \uce90\uc2f1 \uc124\uc815\n        ssl_session_cache shared:SSL:10m;\n        ssl_session_timeout 1h;\n\n        location / {\n            # proxy_set_header Host "wp.coding-play.site";\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            # proxy_set_header X-Real-IP $remote_addr;\n            # proxy_set_header Host $http_host;\n            # proxy_set_header X-NginX-Proxy true;\n            # proxy_redirect off;\n            proxy_pass http://127.0.0.1:3030/;\n\n\n            # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            # proxy_set_header X-Forwarded-Proto $scheme;\n            # proxy_set_header X-Real-IP $remote_addr;\n            # proxy_set_header Host $http_host;\n        }   \n    }\n\n    include servers/*;\n}\n\n# nginx -t\n# brew services restart nginx\n# sudo chmod -R 755 /etc/letsencrypt\n')),(0,o.kt)("h2",{id:"ref"},"ref"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.delmaster.net/69"},"DNS \ub808\ucf54\ub4dc \uc885\ub958"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-DNS-%EB%A0%88%EC%BD%94%EB%93%9C-%EC%A2%85%EB%A5%98-%E2%98%85-%EC%95%8C%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC"},"DNS \ub808\ucf54\ub4dc \uc885\ub958 \uc27d\uac8c \uc774\ud574"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dev-repository.tistory.com/96"},"ssh \uc811\uc18d to mac mini"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hakawati.co.kr/entry/Code-Server-%EA%B5%AC%EC%B6%95%ED%8E%B8#NginX%EC%9D%98%20%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%20%EC%9D%B8%EC%A6%9D%20%EA%B5%AC%EC%84%B1-1"},"nginx + code-server \uad6c\ucd95"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://donghun.dev/code-server-tutorial-guide"},"code-server \uc790\uccb4\uc5d0 https \uc801\uc6a9")))}_.isMDXComponent=!0}}]);