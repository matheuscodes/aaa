/**
 * Copyright (C) 2014 Matheus Borges Teixeira
 *
 * This is a part of Arkanos Organizer Suite (AOS)
 * AOS is a web application for organizing personal goals.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.arkanos.aaa.controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;

/**
 * Controls the Database connection.
 * 
 * @version 1.0
 * @author Matheus Borges Teixeira
 */
public class Database {
	/** Default host for the database **/
	static private String HOST = "localhost:3306";
	/** Default database name **/
	static private String DATABASE = "aos";
	/** Default database username **/
	static private String USER = "root";
	/** Default user password **/
	static private String PASSWORD = "1234";
	/** Static connection to the database **/
	static Connection link = null;
	/** Date format for Saving/Using DB-Dates **/
	// TODO make everyone use this one.
	static public final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

	/**
	 * Simply executes a query in the database.
	 * 
	 * @param q
	 *            String with the SQL.
	 * @return whether the query could be executed.
	 */
	static public boolean execute(String q) {
		try {
			if ((Database.link == null) || Database.link.isValid(1) || Database.link.isClosed()) {
				Database.initialize();
			}
			Statement query = Database.link.createStatement();
			query.execute(q);
			return true;
		} catch (SQLException e) {
			// Log.error("Database", "Problems executing: " + q);
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * Starts up the database.
	 */
	static synchronized public void initialize() {
		/* For CloudControl, MySQL credentials are set as variables */
		if ((System.getenv("MYSQLS_DATABASE") != null) && (System.getenv("MYSQLS_HOSTNAME") != null)
				&& (System.getenv("MYSQLS_PORT") != null) && (System.getenv("MYSQLS_USERNAME") != null)
				&& (System.getenv("MYSQLS_PASSWORD") != null)) {

			String database = System.getenv("MYSQLS_DATABASE");
			String host = System.getenv("MYSQLS_HOSTNAME");
			int port = Integer.valueOf(System.getenv("MYSQLS_PORT"));
			String username = System.getenv("MYSQLS_USERNAME");
			String password = System.getenv("MYSQLS_PASSWORD");

			Database.HOST = host + ":" + port;
			Database.DATABASE = database;
			Database.USER = username;
			Database.PASSWORD = password;
		} else {
			if (System.getProperty("MYSQL_HOST") != null)
				Database.HOST = System.getProperty("MYSQL_HOST");
			if (System.getProperty("MYSQL_DATABASE") != null)
				Database.DATABASE = System.getProperty("MYSQL_DATABASE");
			if (System.getProperty("MYSQL_USER") != null)
				Database.USER = System.getProperty("MYSQL_USER");
			if (System.getProperty("MYSQL_PASSWORD") != null)
				Database.PASSWORD = System.getProperty("MYSQL_PASSWORD");
		}

		try {
			if ((Database.link != null) && Database.link.isValid(1) && !Database.link.isClosed())
				return;
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			Database.link = DriverManager.getConnection("jdbc:mysql://" + Database.HOST + "/" + Database.DATABASE
					+ "?user=" + Database.USER + "&password=" + Database.PASSWORD);
		} catch (SQLException e) {
			// Log.error("Database", "Error opening database.");
			e.printStackTrace();
		} catch (InstantiationException e) {
			// Log.error("Database", "Cannot create object.");
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// Log.error("Database", "Illegal access.");
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// Log.error("Database", "Issues loading class.");
			e.printStackTrace();
		}
	}

	/**
	 * Executes a query in the database and returns the results.
	 * 
	 * @param q
	 *            String with the SQL query.
	 * @return a ResultSet with the results or null if failed.
	 */
	static public ResultSet query(String q) {
		try {
			if ((Database.link == null) || Database.link.isValid(1) || Database.link.isClosed()) {
				Database.initialize();
			}
			Statement query = Database.link.createStatement();
			query.execute(q);
			ResultSet list = query.getResultSet();
			return list;
		} catch (SQLException e) {
			// Log.error("Database", "Problems executing: " + q);
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * Process a string to remove undesired characters.
	 * 
	 * @param s
	 *            String to be cleaned.
	 * @return clean string to be used in SQL.
	 */
	static public String sanitizeString(String s) {
		if (s == null)
			return null;
		// TODO: This is a basic clean, needs improvement.
		s = s.replace('\"', ' ');
		s = s.replace('`', ' ');
		s = s.replace(';', ' ');
		// TODO by using prepared statement this can be deleted.
		return s;
	}

	static public PreparedStatement prepare(String q) {
		System.out.println("Preparing: " + q);
		try {
			if ((Database.link == null) || Database.link.isValid(1) || Database.link.isClosed()) {
				Database.initialize();
			}
			PreparedStatement prepared = Database.link.prepareStatement(q);
			return prepared;
		} catch (SQLException e) {
			// Log.error("Database", "Problems executing: " + q);
			e.printStackTrace();
		}
		return null;
	}

	static public java.sql.Date java2sql(java.util.Date javaDate) {
		java.sql.Date sqlDate = null;
		if (javaDate != null) {
			sqlDate = new java.sql.Date(javaDate.getTime());
		}
		return sqlDate;
	}
}
