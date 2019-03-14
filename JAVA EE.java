/******************************************************************************/
/************** DEFINITIONS ***************************************************/
/******************************************************************************/

/*
JAVA Entreprise Edition
Versions non corrélées avec Java SE (peut utiliser Java 9 avec JEE 6, 7 ou 8)


*/

/******************************************************************************/
/************** ETAPES A SUIVRE, INFOS ****************************************/
/******************************************************************************/

/* 
- appli web besoin : Servlet, serveur d'appli web Java, fichier config web.xml
- utiliser un nouveau package, dédié à la couche web du projet :
pour structurer le projet et savoir où sont situés les Servlet.
- projet web = extension .war
*/

/******************************************************************************/
/************** CLASS HTTPSERVLET *********************************************/
/******************************************************************************/

// pour gérer le protocole HTTP, faut en hériter pour pouvoir générer page web
// peut ajouter les Servlet à nos dépendances via Maven

// Servlet = composant technique pour matérialiser une requête et une réponse.
// faut serveur d'application web Java (= un conteneur de Servlet) pour
// récupérer les messages HTTP et utiliser la bonne Servlet en f° contenu
// ex : Apache Tomcat, Eclipse Jetty, WildFly...

package com.cursan.homeshop.web;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloWorldServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }
}
// HttpServletRequest req : requête HTTP reçue par votre serveur
// HttpServletResponse resp : objet permettant d'envoyer la réponse

// web.xml :
/*
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
    <servlet>
        <servlet-name>HelloWorld</servlet-name>
        <servlet-class>com.cursan.homeshop.web.HelloWorldServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>HelloWorld</servlet-name>
        <url-pattern>/test</url-pattern>
    </servlet-mapping>
</web-app>
*/

/******************************************************************************/
/************** CONNEXION AVEC BASE DE DONNEES ********************************/
/******************************************************************************/

// utiliser une librairie comme MySQL Connector/J (avec Maven)
// créer un package dao (Data Access Object)
// créer une classe DAO pour chaque chose à récupérer dans bdd (bonne pratique)
// ex : classe ProductDAO pour récupérer produits dans la bdd
// créer un statement : outil pour gérer requête

// CLASSE POUR RECUPERER DES PRODUCT DANS BDD
package com.cursan.homeshop.dao;

import com.cursan.homeshop.Product;

public class ProductDAO { // classe pour récupérer des Product dans bdd
    private String url = "jdbc:mysql://localhost/homeshop"; // infos connexion
    private String user = "root";
    private String pwd = "";
    
    /**
     * Get all products on database
     * @return product list
     */
    public List<Product> getAll() {
        List<Product> products = new ArrayList<>();
        try { // connexion
            Connection connection = DriverManager.getConnection(url, user, pwd);
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("select * from product"); //select
            while (rs.next()) {
                String name = rs.getString("name");
                String description = rs.getString("description");
                Double price = rs.getDouble("price");
                products.add(new Product(name, description, price));
            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return products;
    }
}

// A VOIR
doGet()
req.getQueryString() // récupérer paramètres de la requête get
jdbc

