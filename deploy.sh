rm -rf dist &&
yarn build &&
cd dist 
git init &&
git add .  &&
git commit -m "update commit" &&
git branch -M main &&
git remote add origin git@github.com:Klar-t/gulu-ui-website.git &&
git push -f -u origin main &&
cd ..