package org.arkanos.aaa.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.arkanos.aaa.controllers.HTTP;
import org.arkanos.aaa.controllers.Security;
import org.arkanos.aaa.controllers.Security.TokenInfo;
import org.arkanos.aaa.data.Season;
import org.arkanos.aaa.data.Task;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class Tasks
 */
@WebServlet("/tasks/*")
public class Tasks extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Tasks() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TokenInfo requester = Security.authenticateToken(request);
		if (requester == null){
			response.sendError(403); //TODO better message and logging.
			return;
		}
		
			String resource = request.getRequestURI();
			if(!resource.endsWith("/")) resource += "/";
			if(!resource.equals("/tasks/")){
				response.sendError(400);
				return; //TODO set error message
			}
			HTTP.setUpDefaultHeaders(response);
			response.getWriter().println(Task.getAllTasksJSON(requester.getUsername()));
			response.setStatus(200);
			return;
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TokenInfo requester = Security.authenticateToken(request);
		if (requester == null){
			response.sendError(403); //TODO better message and logging.
			return;
		}
		
		try {
			String resource = request.getRequestURI();
			if(!resource.endsWith("/")) resource += "/";
			if(!resource.equals("/tasks/")){
				response.sendError(400);
				return; //TODO set error message
			}
			JSONParser parser = new JSONParser();
			JSONObject json = (JSONObject) parser.parse(request.getReader().readLine());
			if(Season.createSeason(requester.getUsername(), json)){
				response.setStatus(201); //TODO send content created
				return;
			}
			else{
				response.sendError(500);
				return; //TODO message
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
