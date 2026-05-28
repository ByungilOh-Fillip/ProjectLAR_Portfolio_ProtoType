name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # main 브랜치에 push될 때 실행

permissions:
  contents: write # gh-pages 브랜치에 쓰기 권한 부여

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build # package.json에 정의된 빌드 명령 실행

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist # 빌드된 결과물이 저장되는 폴더명 (Vite는 dist, Next는 out 등)
          branch: gh-pages # 배포된 파일이 저장될 브랜치
