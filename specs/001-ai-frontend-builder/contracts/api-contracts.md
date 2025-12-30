# API Contracts: AI-Powered Frontend Builder

## 1. Page Generation API

### 1.1 Generate Frontend Page
**Endpoint**: `POST /api/v1/pages/generate`
**Description**: Generate a complete frontend page based on a description

**Request**:
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "requirements": {
    "html": {
      "semantic": true,
      "accessibility": "WCAG_2_1_AA",
      "responsive": true
    },
    "css": {
      "responsive": true,
      "performance": {
        "criticalCSSSize": "14KB"
      }
    },
    "js": {
      "progressiveEnhancement": true,
      "bundleSizeLimit": "50KB"
    }
  },
  "components": ["array of component IDs or descriptions"],
  "metadata": {
    "viewport": "responsive",
    "seo": {
      "title": "string",
      "description": "string"
    }
  }
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "page": {
      "id": "string",
      "name": "string",
      "htmlContent": "string",
      "cssContent": "string",
      "jsContent": "string",
      "createdAt": "datetime",
      "updatedAt": "datetime"
    },
    "validation": {
      "overallScore": 95,
      "issues": [],
      "recommendations": []
    }
  },
  "message": "Page generated successfully"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "string",
    "details": "object"
  }
}
```

## 2. Component Management API

### 2.1 Create Component
**Endpoint**: `POST /api/v1/components`
**Description**: Create a new reusable UI component

**Request**:
```json
{
  "name": "string",
  "type": "string",
  "htmlTemplate": "string",
  "cssStyles": "string",
  "jsBehavior": "string",
  "accessibilityFeatures": ["array"],
  "responsiveBreakpoints": {
    "mobile": "string",
    "tablet": "string",
    "desktop": "string"
  },
  "tags": ["array of tags"]
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "component": {
      "id": "string",
      "name": "string",
      "type": "string",
      "htmlTemplate": "string",
      "cssStyles": "string",
      "jsBehavior": "string",
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  }
}
```

### 2.2 Get Component
**Endpoint**: `GET /api/v1/components/{id}`
**Description**: Retrieve a specific component by ID

**Response**:
```json
{
  "success": true,
  "data": {
    "component": {
      "id": "string",
      "name": "string",
      "type": "string",
      "htmlTemplate": "string",
      "cssStyles": "string",
      "jsBehavior": "string",
      "accessibilityFeatures": ["array"],
      "responsiveBreakpoints": {
        "mobile": "string",
        "tablet": "string",
        "desktop": "string"
      },
      "tags": ["array"]
    }
  }
}
```

## 3. Validation API

### 3.1 Validate Page
**Endpoint**: `POST /api/v1/validation/page`
**Description**: Validate a frontend page against accessibility and quality standards

**Request**:
```json
{
  "htmlContent": "string",
  "cssContent": "string",
  "jsContent": "string",
  "pageId": "string (optional)"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "validationResult": {
      "id": "string",
      "targetId": "string",
      "validationDate": "datetime",
      "accessibilityIssues": ["array"],
      "performanceIssues": ["array"],
      "bestPracticeIssues": ["array"],
      "overallScore": 95,
      "detailedReport": {
        "accessibility": {},
        "performance": {},
        "bestPractices": {}
      },
      "recommendations": ["array"]
    }
  }
}
```

## 4. Multi-Agent API

### 4.1 Create Agent Task
**Endpoint**: `POST /api/v1/agents/tasks`
**Description**: Create a specialized task for a specific agent

**Request**:
```json
{
  "agentType": "string (HTML|CSS|JS|QA)",
  "description": "string",
  "requirements": ["array of requirements"],
  "context": {
    "target": {
      "type": "string (page|component)",
      "id": "string"
    },
    "constraints": ["array of constraints"]
  }
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "task": {
      "id": "string",
      "agentType": "string",
      "status": "pending",
      "assignedAt": "datetime",
      "result": null
    }
  }
}
```

### 4.2 Get Agent Task Status
**Endpoint**: `GET /api/v1/agents/tasks/{id}`
**Description**: Get the status of a specific agent task

**Response**:
```json
{
  "success": true,
  "data": {
    "task": {
      "id": "string",
      "agentType": "string",
      "status": "string (pending|in_progress|completed|failed)",
      "assignedAt": "datetime",
      "completedAt": "datetime (if completed)",
      "result": "string (output from agent)"
    }
  }
}
```

## 5. Common Error Responses

### 5.1 Validation Error
**HTTP Code**: 400 Bad Request
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": {
      "field": "error_message"
    }
  }
}
```

### 5.2 Not Found Error
**HTTP Code**: 404 Not Found
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Requested resource not found"
  }
}
```

### 5.3 Internal Server Error
**HTTP Code**: 500 Internal Server Error
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An internal error occurred"
  }
}
```

## 6. Common Headers

### 6.1 Authentication
All endpoints (except health check) require authentication:
```
Authorization: Bearer {token}
Content-Type: application/json
```

### 6.2 Rate Limiting
```
X-RateLimit-Limit: {number of requests}
X-RateLimit-Remaining: {remaining requests}
X-RateLimit-Reset: {timestamp of reset}
```