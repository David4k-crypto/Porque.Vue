<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      course: ''
    }
  }
}
</script>

<template>
  <section>
    <h2>Live Profile Form</h2>
    <label>
      Name
      <input v-model="name" type="text">
    </label>
    <label>
      Age
      <input v-model="age" type="number">
    </label>
    <label>
      Course
      <input v-model="course" type="text">
    </label>

    <div>
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Course: {{ course }}</p>
    </div>
  </section>
</template>