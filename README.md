[sourav9063.github.io/my_portfolio/](https://sourav9063.github.io/my_portfolio/)

Steps to deploy at https://sourav9063.github.io/

```
git remote remove origin
```

```
git remote add origin https://github.com/Sourav9063/sourav9063.github.io.git

git pull

git branch --set-upstream-to=origin/master master
```

In package.json

```
  "homepage": "https://sourav9063.github.io",
```

```
npm run deploy
```

Reset back

```
 git remote remove origin
 git remote add origin https://github.com/Sourav9063/my_portfolio

git pull

git branch --set-upstream-to=origin/master master
```

```
 "homepage": "https://sourav9063.github.io/my_portfolio",
```
