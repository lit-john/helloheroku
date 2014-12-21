Make sure you have a package.json file and this it has a
scripts.start entry
>npm init

Install heroku-cli on the codio Box

>parts install heroku-cli

Install foreman

>gem install foreman

Login to Heroku (you need to have an account)

>heroku login

>heroku apps:create
>ssh-keygen -t rsa
>heroku keys:add
>git add .
>git commit -m "initial code"
>git push --set-upstream heroku master
>heroku ps:scale web=1

After than it's simple a matter of
>git add .
>git commit -m "initial code"
>git push heroku master

To test locally with foreman

> foreman start web