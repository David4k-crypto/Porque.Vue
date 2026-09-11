<script>
export default {
  data() {
    return {
      name: 'David Porque',
      age: 20,
      studentId: '2026-0001',
      course: 'BSIT',
      yearLevel: '1st Year'
    }
  }
}
</script>

<template>
  <section>
    <h2>Student Profile</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Student ID: {{ studentId }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ yearLevel }}</p>
  </section>
</template>