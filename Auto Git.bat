@title Space Cat -git
@cd "C:\Users\justi\OneDrive\Desktop\Web Projects\.JC Towing"


@color f
@git add .
@git diff
@echo Files added to git.

@echo.
@echo Note: pressing enter will automatically push
@set /p M="git commit -m "
@git commit -m "%M%"

@echo.
@echo git push...
@git push
@echo.
@echo done.
@timeout /t 3 /nobreak>nul
exit