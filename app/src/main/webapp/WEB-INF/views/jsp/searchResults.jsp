<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>Search Results</title>
</head>
<body>
    <c:if test="${not empty noResultsMessage}">
        <div>
            <p>${noResultsMessage}</p>
        </div>
    </c:if>
    
    <c:forEach var="result" items="${results}">
        <div>
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.description}</p>
        </div>
    </c:forEach>
</body>
</html>
