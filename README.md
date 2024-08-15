Todo:
add subtotal section for accumulated price
create multi file upload for images
add error boundary for form
add on success of form being sent return to home page

Issues to fix:

Notes For Ted:
Show basic set up with layout.
Show how data is sent from the form to email.
what form feilds do you want to be "required" to be filled out?
Does he want the project grid and job request count?
Logo?

Form fixes:
section 1.
name not required or just change to company name

section 2.

modal manufacenur to modal number
number of invertners not required (optional)

section 3.

location add file upload for photos of location

Existing M.S.P. Manufacturer to optional

section 5.

optional, required for california

<div>

<h2>Technologies Used:</h2>

<h3>Multer</h3>

<h4>Multer is a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is designed to be easy to integrate with your Express applications, providing simple APIs to manage file uploads. Multer handles file uploads seamlessly by parsing the incoming form data and storing the files either in memory or directly to disk.</h4>

<h4>Key Features:</h4>

<h5>Simple Integration: Multer integrates effortlessly with Express.js, making file uploads straightforward.</h5>

<h5>Flexible Storage Options: Choose between memory storage (for small files) or disk storage (for larger files), with full control over file destinations and naming conventions.</h5>

<h5>Efficient Parsing: Automatically handles multipart/form-data, parsing form fields and files separately, reducing the complexity of handling uploads.
File Filtering: Set custom file filters to control which files are accepted based on their MIME type or extension.</h5>

<h5>Limits: Define limits on file size, number of files, and fields, preventing potential issues with oversized uploads or too many files.</h5>

<h6>INSTALLATION: npm install multer</h6>

<h3>Chart.js</h3>

<h4>1. Chart.js Plugin: is a JavaScript library that allows developers to create beautiful, interactive charts and graphs in web applications. It provides a straightforward way to visualize data using various chart types, such as line charts, bar charts, pie charts, and more.</h4>

<h4>A. Key Features</h4>

<h5>Simple and Flexible: Chart.js is designed to be simple to use, but it also offers extensive customization options for advanced users.
</h5>

<h5>Responsive Design: Charts are responsive and adapt to different screen sizes, ensuring a great user experience across devices.
Interactive Elements: Provides interactive features like tooltips, legends, and hover effects.</h5>

<h5>Modular Components: Allows you to include only the components you need, which helps keep the library lightweight.
Core Components</h5>

<h5>Chart Types: Chart.js supports a variety of chart types, including:</h5>

<h5>

<span>1. Line: Ideal for showing trends over time.</span>

<span>2. Bar: Useful for comparing quantities across different categories.</span>

<span>3. Radar: Good for displaying data in a circular format.</span>

<span>4. Doughnut/Pie: Great for showing proportions of a whole.</span>

<span>5. Polar Area: Similar to doughnut charts but with a polar coordinate system.</span>

<span>6. Bubble: For plotting data points in a three-dimensional space.</span>

<span>7. Scatter: Shows data points plotted along two axes.</span>

</h5>

<h4><span>Scales: Charts use scales to map data values to visual properties. Common scales include:</span></h4>

<h6>

<span>A. CategoryScale: For categorical data (e.g., months, categories).</span>

<span>B. LinearScale: For numerical data with continuous ranges.</span>

<span>C. LogarithmicScale: For data that spans several orders of magnitude.</span>

<h5><span>Elements: The visual components of a chart:</span></h5>

<span>A. BarElement: Represents bars in bar charts.</span>

<span>B. LineElement: Represents lines in line charts.</span>

<span>C. PointElement: Represents data points in scatter or line charts.</span>

<span>D. Plugins: Extend the functionality of Chart.js with additional features or customizations, such as annotations or data labels.</span>

</h6>

<h5>INSTALLATION: npm install chart.js</h5>

</div>
