<template>
  <div class="border flex flex-col items-center relative justify-between gap-1 w-56 product-rating-badge" :class="convertedValue && convertedValue.grade < 2 ? 'border-blue-500' : 'border-red-500'
    ">
    <div :class="convertedValue && convertedValue.grade < 2 ? 'bg-blue-500' : 'bg-red-500'
      " class="px-3 py-2 text-center font-semibold w-full">
      <span v-if="layout === 'number'">
        Vergleich.org
      </span>
      <span v-else class="uppercase">
        auszeichnung
      </span>
    </div>
    <div class="py-4 text-center">
      <div class="text-gray-500">
        Our rating
      </div>
      <div :class="convertedValue && convertedValue.grade < 2 ? 'text-blue-500' : 'text-red-500'">
        <span v-if="layout === 'number'" class="text-4xl">
          {{ convertedValue?.grade.toString().replace('.', ',') }}
        </span>
        <span v-else class="uppercase">
          {{ convertedValue.text }}
        </span>
      </div>
      <div v-if="layout === 'number'" class="text-gray-700 ">
        {{ convertedValue.text }}
      </div>
    </div>
    <div class="bottom-0 bg-gray-50 w-full text-gray-700 text-center py-0.5 border-t">
      02/2021
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String as PropType<string>,
    required: true
  },
  layout: {
    type: String as PropType<string>
  }
});

type ReviewData = {
  grade: number,
  text: string
}

const convertedValue = computed<ReviewData>(() => {
  let grade = 0;
  let text = ''
  const rating = Number(props.value)
  if (rating >= 90 && rating <= 100) {
    grade = 1 + (1 - (rating - 90) / 10);
    text = "sehr gut"
  } else if (rating >= 70 && rating < 90) {
    grade = 2 + (1 - (rating - 70) / 19);
    text = "gut";
  } else if (rating >= 50 && rating < 70) {
    grade = 3 + (1 - (rating - 50) / 19);
    text = "befriedigend";
  } else if (rating >= 30 && rating < 50) {
    grade = 4 + (1 - (rating - 30) / 19);
    text = "ausreichend"
  } else if (rating >= 20 && rating < 30) {
    grade = 5 + (1 - (rating - 20) / 9);
    text = "mangelhaft"
  } else if (rating >= 1 && rating < 20) {
    grade = 6 + (1 - (rating - 1) / 18);
    text = "ungenügend"
  }

  return {
    grade: parseFloat(grade.toFixed(1)),
    text: text
  }
})


</script>