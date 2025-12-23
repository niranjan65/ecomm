

// export const apiGet = async (url, headers) => {
//   const res = await fetch(url, {
//     method: "GET",
//     headers,
//   });

//   if (!res.ok) {
//     throw new Error("GET request failed");
//   }

//   return res.json();
// };

// export const apiPost = async (url, body, headers) => {
//   const res = await fetch(url, {
//     method: "POST",
//     headers,
//     body: JSON.stringify(body),
//   });

//   if (!res.ok) {
//     throw new Error("POST request failed");
//   }

//   return res.json();
// };

















// Base API configuration
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

// Helper function to handle API responses
const handleResponse = async (res, method) => {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw {
      status: res.status,
      message: errorData.message || `${method} request failed`,
      data: errorData,
    };
  }

  // Handle empty responses
  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

// GET request
export const apiGet = async (url, headers = {}) => {
  const res = await fetch(url, {
    method: "GET",
    headers: { ...DEFAULT_HEADERS, ...headers },
  });

  return handleResponse(res, "GET");
};

// POST request
export const apiPost = async (url, body = {}, headers = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: JSON.stringify(body),
  });

  return handleResponse(res, "POST");
};

// PUT request
export const apiPut = async (url, body = {}, headers = {}) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: JSON.stringify(body),
  });

  return handleResponse(res, "PUT");
};

// PATCH request
export const apiPatch = async (url, body = {}, headers = {}) => {
  const res = await fetch(url, {
    method: "PATCH",
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: JSON.stringify(body),
  });

  return handleResponse(res, "PATCH");
};

// DELETE request
export const apiDelete = async (url, headers = {}) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: { ...DEFAULT_HEADERS, ...headers },
  });

  return handleResponse(res, "DELETE");
};

// Usage Examples:
/*
// GET request
const users = await apiGet('https://api.example.com/users');

// GET with custom headers
const users = await apiGet('https://api.example.com/users', {
  'Authorization': 'Bearer token123'
});

// POST request
const newUser = await apiPost('https://api.example.com/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// POST with custom headers
const newUser = await apiPost(
  'https://api.example.com/users',
  { name: 'John' },
  { 'Authorization': 'Bearer token123' }
);

// PUT request
const updatedUser = await apiPut('https://api.example.com/users/1', {
  name: 'Jane Doe'
});

// PATCH request
const patchedUser = await apiPatch('https://api.example.com/users/1', {
  email: 'newemail@example.com'
});

// DELETE request
await apiDelete('https://api.example.com/users/1');

// Error handling
try {
  const data = await apiGet('https://api.example.com/users');
  console.log(data);
} catch (error) {
  console.error('Error:', error.message);
  console.error('Status:', error.status);
  console.error('Details:', error.data);
}
*/