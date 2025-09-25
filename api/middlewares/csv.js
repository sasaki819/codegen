
const fs = require('fs');
const path = require('path');

// The database file
const dbFilePath = path.join(__dirname, '../db.json');

/**
 * Converts an array of objects to a CSV string.
 * @param {Array<Object>} data The array of objects.
 * @returns {string} The CSV string.
 */
function toCsv(data) {
  if (!data || data.length === 0) {
    return '';
  }
  const headers = Object.keys(data[0]);
  const rows = data.map(obj => 
    headers.map(header => JSON.stringify(obj[header])).join(',')
  );
  return [headers.join(','), ...rows].join('\n');
}

/**
 * Custom middleware for handling CSV import/export.
 */
module.exports = (req, res, next) => {
  // --- CSV Download ---
  if (req.path.endsWith('/download') && req.method === 'POST') {
    const resource = req.path.split('/')[1]; // e.g., "employees"

    fs.readFile(dbFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send({ error: 'Could not read database file.' });
      }

      try {
        const db = JSON.parse(data);
        const resourceData = db[resource];

        if (!resourceData) {
          return res.status(404).send({ error: `Resource '${resource}' not found.` });
        }

        const csvData = toCsv(resourceData);
        const filename = `${resource}_${new Date().toISOString().slice(0, 10)}.csv`;

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.status(200).send(csvData);
      } catch (parseErr) {
        return res.status(500).send({ error: 'Could not parse database file.' });
      }
    });

  // --- CSV Upload ---
  } else if (req.path.endsWith('/upload') && req.method === 'POST') {
    // NOTE: A robust implementation of CSV upload requires a multipart form data parser
    // like 'multer'. Without such a library, we can only handle very basic, non-chunked
    // raw data, which is not practical for real-world file uploads.
    // The following is a placeholder to demonstrate where the logic would go.

    console.log('Received a CSV upload request. Body processing would happen here.');
    
    // To implement this properly:
    // 1. Add a multipart parser middleware (e.g., multer) before this one.
    // 2. Access the file from `req.file`.
    // 3. Read the file stream, parse the CSV (using a library like `csv-parser`).
    // 4. Read `db.json`, update the data, and write it back.

    res.status(501).json({
      message: 'CSV upload is not implemented.',
      note: 'A library like multer is required for a proper implementation.'
    });

  } else {
    // For all other requests, pass them to the next middleware (json-server default behavior)
    next();
  }
};
