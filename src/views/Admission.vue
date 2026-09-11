<script setup>

import { ref } from 'vue';
import navbar from '@/components/Navbar.vue';

</script>

<template>
<div class="page">
<!-- Page header -->
<header class="hero">
<div class="container">
<p class="eyebrow">Admissions</p>
<h1>Apply, Estimate, Enroll (THIS IS FOR CLASS WORK SAMPLE ONLY)</h1>
<p class="lead">Everything you need to explore your next step at David Porque.</p>

<div class="hero-resources" aria-label="Admission resources">
<a href="https://cpu.edu.ph/registrars-office-forms/" target="_blank" rel="noopener noreferrer" class="resource-link">
<span class="resource-icon">01</span>
<span><strong>Registrar forms</strong><small>Download official documents</small></span>
</a>
<a href="https://cpu.edu.ph/about-us/phone-directory/" target="_blank" rel="noopener noreferrer" class="resource-link">
<span class="resource-icon">02</span>
<span><strong>Contact directory</strong><small>Find the right university office</small></span>
</a>
<a href="https://my.cpu.edu.ph/" target="_blank" rel="noopener noreferrer" class="resource-link">
<span class="resource-icon">03</span>
<span><strong>Student services</strong><small>Access your online portal</small></span>
</a>
<a href="https://cpu.edu.ph/" target="_blank" rel="noopener noreferrer" class="resource-link">
<span class="resource-icon">04</span>
<span><strong>Visit CPU online</strong><small>Discover campus life and programs</small></span>
</a>
</div>

<div class="hero-contact">
<div><span class="contact-label">Visit</span><strong>5000 Jaro, Iloilo City, Philippines</strong></div>
<div><span class="contact-label">Call or email</span><strong>+63 (33) 329-1971 &middot; infocenter@cpu.edu.ph</strong></div>
</div>
</div>
</header>

<main class="container main">
<div class="admissions-layout">
<!-- Admission requirements -->
<section class="card requirements-card">
<h2>Admission Requirements</h2>
<div class="requirements-grid">
<ul>
<li>Valid ID,. </li>
<li>Grades from previous school. </li>
<li>2by2 picture. </li>
<li> Academic Behavior. </li>
</ul>
</div>
<p class="requirement-note">Prepare these documents before beginning your application.</p>
</section>

<!-- Tuition calculator -->
<section class="card calculator-card">
<h2>Tuition Fee Calculator</h2>
<p class="muted">
Select your program and units to estimate your fees for one
semester. This is an estimate only — final assessment is issued by
the Registrar's Office of CPU. 
</p>

<div class="form-grid">
<label class="field">
<span>Program</span>
<select>
<option>BS Computer Science</option>
<option>BS Information Technology</option>
<option>BS Business Administration</option>
<option>BS Education</option>
<option>BS Nursing</option>
</select>
</label>

<label class="field">
<span>Year Level</span>
<select>
<option>1st Year</option>
<option>2nd Year</option>
<option>3rd Year</option>
<option>4th Year</option>
</select>
</label>

<label class="field">
<span>Units this semester: 21</span>
<input type="range" min="12" max="27" value="21" />
<div class="range-labels">
<span>12</span>
<span>27</span>
</div>
</label>
</div>

<div class="field payment-terms">
<span>Payment terms</span>
<div class="button-group">
<button type="button" class="pill active">Full payment</button>
<button type="button" class="pill">3 installments</button>
<button type="button" class="pill">5 installments</button>
</div>
</div>

<!-- Breakdown table -->
<div class="table-wrap">
<table>
<thead>
<tr>
<th class="align-left">Schedule of Fees</th>
<th class="align-right">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tuition Fee (21 units × ₱650)</td>
<td class="align-right">₱13,650</td>
</tr>
<tr>
<td>Laboratory Fee (21 units × ₱150)</td>
<td class="align-right">₱3,150</td>
</tr>
<tr>
<td>Miscellaneous Fee (8% of tuition)</td>
<td class="align-right">₱1,092</td>
</tr>
<tr class="muted-row">
<td>Registration Fee</td>
<td class="align-right">₱750</td>
</tr>
<tr class="muted-row">
<td>Library Fee</td>
<td class="align-right">₱500</td>
</tr>
<tr class="muted-row">
<td>Athletic Fee</td>
<td class="align-right">₱350</td>
</tr>
<tr class="muted-row">
<td>Medical & Dental Fee</td>
<td class="align-right">₱400</td>
</tr>
<tr class="muted-row">
<td>Guidance & Testing Fee</td>
<td class="align-right">₱300</td>
</tr>
<tr class="muted-row">
<td>ID & Insurance Fee</td>
<td class="align-right">₱450</td>
</tr>
<tr class="muted-row">
<td>Student Organization Fee</td>
<td class="align-right">₱250</td>
</tr>
</tbody>
<tfoot>
<tr class="total-row">
<td>Total Assessment (1st Year)</td>
<td class="align-right">₱20,892</td>
</tr>
</tfoot>
</table>
</div>

<p class="fine-print">
* Rates shown are sample figures for demonstration purposes.
Replace with your institution's actual schedule of fees.
</p>

<section class="cta">
<button type="button" class="primary-btn">Start Your Application</button>
</section>
</section>
</div>
</main>

<footer class="site-footer">
© 2026 University Name. All rights reserved.
</footer>
</div>
</template>

<style scoped>
* {
box-sizing: border-box;
}

.page {
min-height: 100vh;
background-color: #f8fafc;
color: #334155;
font-family: Arial, Helvetica, sans-serif;
}

.container {
max-width: 960px;
margin: 0 auto;
padding: 0 24px;
}

/* Header */
.hero {
background: linear-gradient(115deg, #244f50 0%, #447d7c 58%, #679994 100%);
color: #ffffff;
padding: 56px 0 64px;
}

.eyebrow {
font-size: 13px;
text-transform: uppercase;
letter-spacing: 0.05em;
color: #94a3b8;
margin: 0 0 8px;
}

.hero h1 {
font-size: clamp(32px, 5vw, 54px);
max-width: 760px;
line-height: 1.05;
margin: 0 0 12px;
}

.lead {
max-width: 640px;
color: #cbd5e1;
margin: 0;
line-height: 1.6;
}

.hero-resources {
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 10px;
max-width: 700px;
margin-top: 28px;
}

.resource-link {
display: flex;
align-items: center;
gap: 12px;
padding: 13px 14px;
color: #ffffff;
text-decoration: none;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 8px;
transition: background-color 160ms ease, transform 160ms ease;
}

.resource-link:hover {
background: rgba(255, 255, 255, 0.18);
transform: translateY(-2px);
}

.resource-icon {
display: grid;
place-items: center;
width: 30px;
height: 30px;
flex: 0 0 30px;
border-radius: 50%;
background: #d9b84c;
color: #244f50;
font-size: 11px;
font-weight: 800;
}

.resource-link strong,
.resource-link small {
display: block;
}

.resource-link strong {
font-size: 13px;
}

.resource-link small {
margin-top: 3px;
color: #d6e4e3;
font-size: 11px;
}

.hero-contact {
display: flex;
flex-wrap: wrap;
gap: 24px;
margin-top: 26px;
padding-top: 18px;
border-top: 1px solid rgba(255, 255, 255, 0.2);
color: #d6e4e3;
font-size: 12px;
}

.hero-contact > div {
display: grid;
gap: 4px;
}

.contact-label {
color: #d9b84c;
font-size: 10px;
font-weight: 800;
letter-spacing: 0.08em;
text-transform: uppercase;
}

.hero-contact strong {
font-size: 12px;
font-weight: 500;
}

/* Main content */
.main {
padding: 36px 24px 48px;
}

.admissions-layout {
display: grid;
grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.8fr);
gap: 24px;
align-items: start;
}

.card {
background-color: #ffffff;
border: 1px solid #e2e8f0;
border-radius: 8px;
padding: 24px;
box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
}

.requirements-card {
position: sticky;
top: 24px;
background-color: #f0f7f6;
border-color: #c8dedb;
}

.requirements-card h2 {
color: #244f50;
}

.requirement-note {
border-top: 1px solid #c8dedb;
padding-top: 16px;
margin: 20px 0 0;
font-size: 13px;
line-height: 1.6;
color: #527170;
}

.card h2 {
font-size: 20px;
margin: 0 0 16px;
}

.muted {
font-size: 14px;
color: #64748b;
margin: 0 0 24px;
}

/* Requirements */
.requirements-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
font-size: 14px;
}

.requirements-grid ul {
margin: 0;
padding-left: 18px;
color: #475569;
line-height: 1.8;
}

.requirements-grid li {
font-size: 13px;
white-space: nowrap;
}

/* Calculator form */
.form-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
margin-bottom: 24px;
}

.field {
display: block;
font-size: 14px;
}

.field > span {
display: block;
font-weight: 600;
color: #475569;
margin-bottom: 6px;
}

select {
width: 100%;
padding: 8px 12px;
border: 1px solid #cbd5e1;
border-radius: 6px;
background-color: #ffffff;
font-size: 14px;
}

input[type="range"] {
width: 100%;
margin-top: 12px;
}

.range-labels {
display: flex;
justify-content: space-between;
font-size: 12px;
color: #94a3b8;
margin-top: 4px;
}

.payment-terms {
margin-bottom: 24px;
}

.button-group {
display: flex;
gap: 8px;
}

.pill {
padding: 6px 14px;
border-radius: 6px;
font-size: 14px;
border: 1px solid #cbd5e1;
background-color: #ffffff;
color: #475569;
cursor: pointer;
}

.pill.active {
background-color: #0f172a;
border-color: #0f172a;
color: #ffffff;
}

/* Table */
.table-wrap {
border: 1px solid #e2e8f0;
border-radius: 6px;
overflow: hidden;
}

table {
width: 100%;
border-collapse: collapse;
font-size: 14px;
}

thead {
background-color: #f1f5f9;
color: #64748b;
text-transform: uppercase;
font-size: 12px;
}

th,
td {
padding: 10px 16px;
text-align: left;
}

.align-right {
text-align: right;
}

.align-left {
text-align: left;
}

tbody tr {
border-top: 1px solid #f1f5f9;
}

.muted-row {
color: #64748b;
}

.total-row {
background-color: #f8fafc;
border-top: 1px solid #e2e8f0;
font-weight: 700;
}

.fine-print {
font-size: 12px;
color: #94a3b8;
margin: 16px 0 0;
}

/* CTA */
.cta {
text-align: center;
padding: 28px 0 0;
border-top: 1px solid #e2e8f0;
margin-top: 24px;
}

.primary-btn {
background-color: #0f172a;
color: #ffffff;
border: none;
padding: 12px 24px;
border-radius: 6px;
font-size: 15px;
font-weight: 600;
cursor: pointer;
}

.primary-btn:hover {
background-color: #1e293b;
}

/* Footer */
.site-footer {
border-top: 1px solid #e2e8f0;
padding: 24px;
text-align: center;
font-size: 13px;
color: #94a3b8;
}

/* Responsive */
@media (max-width: 640px) {
.admissions-layout {
grid-template-columns: 1fr;
}
.requirements-card {
position: static;
}
.form-grid {
grid-template-columns: 1fr;
}
.requirements-grid {
grid-template-columns: 1fr;
}
}
</style>