# Colrutas Mobile

## Descripción
Breve descripción del proyecto, su propósito y funcionalidades principales.

## Instalación
Instrucciones detalladas sobre cómo instalar y configurar el proyecto en un entorno local

- Requisitos previos
  - Instalacion de Nodejs en su version 18 como minimo, se recomienda la version LTS
  - Instalacion de [Andrioid Studio](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA8XOF12fx3saV92rvqrv7GLW4st23xafwdkVc560tKjIe8MHNnKoicaAjiSEALw_wcB&gclsrc=aw.ds&hl=es-419)
  - Instalacion de [yarn](https://yarnpkg.com/getting-started/install)
  - Instalacion de [git](https://git-scm.com/)
  - Instalacion de xcode (Solo para mac)
- Clonación del repositorio.
  - Utilizar el sistema de git para clonar el repositorio, este no incluye los node modules ya que deben ser instalados posteriormente
- Instalación de dependencias.

  Estabdo ubicados en la carpeta raiz utilizar el comando de yarn o de npm en la terminal para instalar las dependencias
  ```
  yarn 
  ```
  ```
  npm install
  ```
- Configuración específica del entorno
  - Crear las viables de entorno dentro de la carpeta raiz nombrandola como .env
  - Modificar la carpeta constans segun sea nesesario para cambiar el link del backend alojado en railway

## Uso
Instrucciones sobre cómo utilizar el proyecto.

- Iniciar la aplicación en un emulador o dispositivo físico, a atrves de expo con los comandos nesesarios
  ### yarn
    ```
    yarn start
    ```
  ### npm
    ```
    npm run start
    ```
- Utilizar la opcion de emulacion ya sea android o IOS (para el uso de IOS es nesesario hacerlo desde una mac o utilizar el Qr de expo desde un Iphone)
- Realizar el inicio de sesion con alguna de la cuentas creadas desde la web

## Estructura del Proyecto
Descripción de la estructura de archivos y carpetas del proyecto. Esto puede incluir una descripción de la función de cada archivo importante (componentes, pantallas, utilidades, etc.).

- Screens
  Contiene todas las pantallas disponibles en el front mobil y el como estas estan dividias para su funcionamiento
- components
  Contiene los componentes como botones, inputs, cajas y complementos que se emplean dentro de la carpeta de Screens
- assets
  Contiene todas las imagenes que se utilizan dentro de la cerpeta Screens

## Dependencias

- **@react-navigation/bottom-tabs**: ^6.5.11
- **@react-navigation/native**: ^6.1.9
- **@react-navigation/native-stack**: ^6.9.17
- **@react-navigation/stack**: ^6.3.20
- **@rnmapbox/maps**: ^10.1.13
- **@types/react-native-vector-icons**: ^6.4.18
- **axios**: ^1.6.3
- **expo**: ^49.0.21
- **expo-secure-store**: 12.3.1
- **expo-status-bar**: ~1.6.0
- **react**: 18.2.0
- **react-native**: 0.72.6
- **react-native-gesture-handler**: 2.12.0
- **react-native-keychain**: ^8.1.2
- **react-native-maps**: ^1.9.0
- **react-native-navigation-bar-color**: ^2.0.2
- **react-native-redash**: ^18.1.2
- **react-native-safe-area-context**: 4.6.3
- **react-native-screen**: ^1.0.1
- **react-native-svg**: ^13.9.0
- **react-native-vector-icons**: ^10.0.3

## Problemas Conocidos
Lista de problemas conocidos o limitaciones del proyecto
- Uso de mapa mapbox, actualmete el mapa de mapbox no es posible utilizarlo dentro las versiones de prueba con expo. Para esto se recomienda hacer el compilado de la aplicacion o realizar un build con [Metro](https://reactnative.dev/docs/metro)
