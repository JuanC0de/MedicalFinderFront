<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

export default {
  setup () {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
        select (value) {
          if (value) return true

          return 'Select an item.'
        },
        checkbox (value) {
          if (value === '1') return true

          return 'Must be checked.'
        },
      },
    })
    const email = useField('email')
    const select = useField('select')
    const checkbox = useField('checkbox')

    const items = ref([
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ])

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return {email, select, checkbox, items, submit, handleReset }
  },
}
</script>
<template>
    <form @submit.prevent="submit">
  
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
  
      <v-select
        v-model="select.value.value"
        :items="items"
        :error-messages="select.errorMessage.value"
        label="Select"
      ></v-select>
  
      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="Option"
        type="checkbox"
      ></v-checkbox>
  
      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>
  
      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
</template>
