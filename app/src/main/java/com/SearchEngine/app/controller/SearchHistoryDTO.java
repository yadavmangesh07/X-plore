package com.SearchEngine.app.controller;

public class SearchHistoryDTO {
    private String userId;
    private String query;
	public SearchHistoryDTO() {
		super();
		
	}
	public SearchHistoryDTO(String userId, String query) {
		super();
		this.userId = userId;
		this.query = query;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
    
    

    
}
