rsync -a ./build/ root@yoneda.fun:/var/www/portfolio
ssh root@yoneda.fun 'systemctl restart nginx'