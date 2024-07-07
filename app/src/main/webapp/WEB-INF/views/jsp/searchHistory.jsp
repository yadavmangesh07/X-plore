<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Search History</title>
</head>
<body>
    <h2>Search History</h2>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Search Query</th>
                <th>Search Date</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="history" items="${searchHistory}">
                <tr>
                    <td>${history.id}</td>
                    <td>${history.searchQuery}</td>
                    <td>${history.searchDate}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</body>
</html>
