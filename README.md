![crono-q-logo](./public/CronoQLogo.svg)
<p align="center">
<emph>Un sistema de filas virtuales para ventos donde se necesite la participación física de los asistentes.</emph>
</p>
<hr>

## Setup

### Dependencias

- NodeJS
- npm

## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/jmacias1503/crono-q.git
    ```
2. Instalar las dependencias:
    ```bash
    npm i
    ```
3. Configurar las variables de entorno:
    - `DATABASE_URL`: elige una base de datos local o de _testing_
4. Despliega el esquema de la base de datos con:
    ```bash
    npx prisma db push
    ```
## Inicialización del servidor de desarrollo

El servidor iniciará en la url `http://localhost:3000`
```bash
npm run dev
```

## Despliegue del proyecto
Despliega el proyecto con el siguiente comando

```bash
npm run build
```

Previsualiza el despliegue con:

```bash
npm run preview
```
