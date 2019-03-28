:: input commit message
set /p commit_msg=Please input commit message:
:: your code path
cd E:\nodejsStudy
set h=%time:~0,2%
set h=%h: =0%
set mycomit=%commit_msg%%date:~0,4%%date:~5,2%%date:~8,2%%h%%time:~3,2%%time:~6,2%
echo %mycomit%

:: show git status
git status
git checkout  -b %mycomit%
git add -A
git commit -m '%mycomit%'
git push origin %mycomit%
git checkout master
git merge %mycomit%
git push origin master

pause
