<template>
  <div class="tasks">
    <h1>Edit Task</h1>
      <div class="form">
        <div>
          <textarea rows="15" cols="15" placeholder="NAME" v-model="name"></textarea>
        </div>
        <div>
          <button class="app_task_btn" @click="updateTask">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksService'
export default {
  name: 'EditTask',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.getTask()
  },
  methods: {
    async getTask () {
      const response = await TasksService.getTask({
        id: this.$route.params.id
      })
      this.name = response.data.name
    },
    async updateTask () {
      await TasksService.updateTask({
        id: this.$route.params.id,
        name: this.name
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_task_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
