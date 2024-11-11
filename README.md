<h1 align="center" style="color: blue;">Wink</h1>

  <h3>Diseño de la Aplicación</h3>
  <p>El diseño de la aplicación se encuentra aquí: <a href="https://www.figma.com/file/E2FpYVGGakgu0qyBDdWA8A/Wink---Prueba-t%C3%A9cnicanode-id=0%3A1">Diseño en Figma</a></p>
  <h3>Estandares</h3>
  <ul>
      <li><strong>Lenguaje para Programar</strong>: Inglés</li>
      <li><strong>Variables</strong>: <code>camelCase</code>
          <pre><code>const varExample = ""</code></pre>
      </li>
      <li><strong>Constantes</strong>: <code>UPPERCASE_SNAKE_CASE</code>
          <pre><code>const CONSTANTE_EJEMPLO = ""</code></pre>
      </li>
      <li><strong>Funciones</strong>: <code>camelCase</code>
          <pre><code>function funcionEj() {}</code></pre>
      </li>
      <li><strong>Componentes</strong>: <code>PascalCase</code>
          <pre><code>function FuncionEj() {}</code></pre>
      </li>
  </ul>
  <h3>Estructura de Carpetas</h3>
  <!-- Aquí puedes agregar la estructura de carpetas si la tienes definida -->
  <h3>Estructura de Base de Datos</h3>
  <h4>Diagrama</h4>
  <p align="center">
      <img src="./src/assets/entity-relationship.PNG" alt="Diagrama de la Base de Datos">
  </p>
  <h3>Patrones de Acceso</h3>
  <ul>
      <li><strong>Users</strong>
          <ul>
              <li>Get User Info (Read)</li>
              <li>Get balance User Info (Read)</li>
              <li>Update balance User Info (Write)</li>
          </ul>
      </li>
      <li><strong>UserTransaction</strong>
          <ul>
              <li>Get Transaction History (Read)</li>
              <li>Create New Transaction (Write)</li>
          </ul>
      </li>
  </ul>
  <h3>Diseño de Primary Key</h3>
<table>
  <thead>
    <tr>
      <th>Tabla</th>
      <th>Partition Key</th>
      <th>Sort Key</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Users</td>
      <td>userId</td>
      <td>-</td>
      <td>Identifica de manera única a cada usuario en el sistema.</td>
    </tr>
    <tr>
      <td>UserTransactions</td>
      <td>userId</td>
      <td>transactionId</td>
      <td>Identifica de manera única cada transacción de un usuario, permite ordenar las transacciones.</td>
    </tr>
  </tbody>
</table>

<h1>Aplicación React Native con Expo para prueba de Wink</h1>
  <p>Esta es una aplicación de React Native construida con Expo que incorpora las siguientes dependencias:</p>
  <ul>
    <li><code>expo</code></li>
    <li><code>expo-router</code></li>
    <li><code>react-native-reanimated</code></li>
    <li><code>eslint</code></li>
    <li><code>prettier</code></li>
    <li><code>typescript</code></li>
    <li><code>@expo/vector-icons</code></li>
  </ul>

  <h2>Primeros Pasos</h2>
  <h3>Requisitos Previos</h3>
  <p>Asegúrate de tener Node.js y npm/yarn instalados en tu entorno de desarrollo.</p>

  <h3>Instalación</h3>
  <ol>
    <li>Clona el repositorio:</li>
    <pre><code>git clone https://github.com/Lucas141418/WinkFrontEnd.git</code></pre>
    <li>Navega al directorio del proyecto:</li>
    <pre><code>cd your-repo-name</code></pre>
    <li>Instala las dependencias:</li>
    <pre><code>yarn install</code> o <code>npm install</code></pre>
  </ol>

  <h2>Ejecutar la Aplicación</h2>
  <pre><code>npx expo start</code> </pre>
  <pre>más recomendado </pre>
  <pre><code>npm run start</code></pre>
  <p>Esto iniciará el servidor de desarrollo y abrirá Expo Go en tu navegador predeterminado para una vista previa fácil en el dispositivo.</p>

  <h2>Estructura de Carpetas</h2>
  <pre>
  /winkFrontEnd
  |-- /app
  |-- /node_modules
  |-- /src
  |    |-- /assets
  |    |-- /Components
  |    |    |-- /AccountDetail
  |    |    |-- /Animation
  |    |    |-- /Contacts
  |    |    |-- /Sinpe
  |    |    |-- /Transaction
  |    |        |-- Header.tsx
  |    |        |-- Main.tsx
  |    |        |-- Screen.tsx
  |    |-- /context
  |    |    |-- userInfoContext.tsx
  |    |-- /Hooks
  |    |    |-- useFetchCreateTransaction.ts
  |    |    |-- useFetchTransaction.ts
  |    |    |-- useFetchTransactionsHistory.ts
  |    |    |-- useFetchUserInfo.ts
  |    |-- /Mocks
  |    |    |-- transactions.json
  |    |    |-- users.json
  |    |-- /Services
  |    |    |-- FetchData.ts
  |    |-- /styles
  |    |    |-- AppStyles.ts
  |    |-- App.tsx
  |    |-- constants.ts
  |    |-- types.d.ts
  |    |-- Utils.ts
  |-- tsconfig.json
  |-- .eslintrc.js
  |-- .prettierrc
  |-- package.json
  </pre>
