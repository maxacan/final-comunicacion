## Instalacion
Lo típico:
- Crear entorno virtual dentro de la carpeta con ``` python -m venv .venv```.
- Activar el entorno virtual.
- Instalar requisitos con ``` python -m pip install -r requirements.txt```.
- Aplicar migraciones con ``` python manage.py makemigrations``` y ``` python manage.py migrate```.
- Iniciar la app con ``` python manage.py runserver```.

## Datos
- Las vistas principales estan en la app `core`.
- El template de `base.html` está en `core/templates/core/base.html`.
- Hay que elegir un logo y un nombre para la empresa.
