<template>
  <div class="datatable dark">
    <div class="table-top">
      <div class="table-left">
        <a href="" class="btn btn-primary">Testing</a>
      </div>
      <div class="table-right">
        <div class="table-search">
          <input class="table-control" type="text" />
          <button class="table-control btn-primary" role="search">
            <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>
    <table class="table">
      <thead v-if="!isLoading" class="table-head">
        <tr>
          <th v-for="item in headers" :key="item.label" class="table-header">
            <div
              v-if="!isFieldSpecial(item.name) && !item.customHeader"
              class="header-item"
              @click="order(item.name)"
            >
              {{ item.label }}
              <div
                v-if="item.sortable && sortedField === item.name"
                class="header-sort"
              >
                <div v-if="sortedDirection === 'asc'">
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up']"
                  ></font-awesome-icon>
                </div>
                <div v-else>
                  <font-awesome-icon
                    :icon="['fas', 'arrow-down']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
            <div
              v-if="!isFieldSpecial(item.name) && item.customHeader"
              :class="css.thWrapper"
              @click="order(item.name)"
            >
              <slot
                v-if="item.customHeader"
                :header-data="item"
                :name="customHeaderName(item)"
              />
              <div v-if="item.sortable">
                <div v-if="sort">↑</div>
                <div v-if="!sort">↓</div>
              </div>
            </div>
            <div
              v-if="
                isFieldSpecial(item.name) &&
                  extractArgs(item.name) === 'checkboxes'
              "
              class="header-checkbox"
            >
              <Checkbox :value="checkedAll" @change="checkAll" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <template v-if="isLoading">
          <tr>
            <td :colspan="headers.length" class="">
              <slot name="spinner" />
            </td>
          </tr>
        </template>
        <template v-else-if="data.length">
          <tr
            v-for="(item, index) in data"
            :key="index"
            class="table-row"
            :class="{
              'is-checked': isCheckedItem(item)
            }"
          >
            <td
              v-for="key in headers"
              :key="`${index}-${key.name}`"
              class="table-control"
              :class="{ 'cursor-pointer': !isFieldSpecial(key.name) }"
              @click="rowClick(item, key)"
            >
              <slot
                v-if="
                  isFieldSpecial(key.name) &&
                    extractArgs(key.name) === 'actions'
                "
                :name="extractActionID(key.name)"
                :row-data="item"
                :row-index="index"
              />
              <Checkbox
                v-if="
                  isFieldSpecial(key.name) &&
                    extractArgs(key.name) === 'checkboxes'
                "
                :row-data="item"
                :row-index="index"
                :v-model="checkAll || isCheckedItem(item)"
                :value="isCheckedItem(item)"
                @change="checkItem(item, $event)"
              />
              <slot
                v-if="key.customElement"
                :row-data="item"
                :row-index="index"
                :name="customElementName(key)"
              />
              <template v-else-if="key.format">{{
                key.format(item[key.name])
              }}</template>
              <template v-else>
                <DataTableItem>
                  {{ item[key.name] }}
                </DataTableItem>
              </template>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr class="">
            <td :colspan="headers.length" class="">
              Item Not Found
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="table-bottom">
      <div class="table-left">
        <a href="" class="btn btn-primary">Testing</a>
      </div>
      <div class="table-right">
        <Pagination
          :current="current_page"
          :last="last_page"
          :has-prev="hasPrev"
          :has-next="hasNext"
          theme="light"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash'
import DataTableItem from './DataTableItem'
import Pagination from '@/components/Pagination'
import Checkbox from '@/components/Checkbox'

export default {
  name: 'DataTable',
  components: {
    Pagination,
    Checkbox,
    DataTableItem
  },
  props: {
    headerFields: {
      type: Array,
      required: true
    },
    sortField: {
      type: String,
      default: null
    },
    sort: {
      type: String,
      default: 'asc'
    },
    data: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: () => false
    },
    trackBy: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      sortedField: this.sortField,
      sortedDirection: this.sort,
      loading: this.isLoading,
      checkedAll: false,
      checkedItems: [],
      current_page: 1,
      last_page: 5,
      hasNext: true,
      hasPrev: false,
      itemsPerPage: 5
    }
  },
  computed: {
    hasSlots() {
      return (
        this.$slots.pagination !== undefined ||
        this.$slots.ItemsPerPage !== undefined
      )
    },
    headers() {
      if (
        this.headerFields &&
        this.headerFields.constructor === Array &&
        this.headerFields.length
      ) {
        return Object.keys(this.headerFields).map((key) => {
          const field = this.headerFields[key]
          if (typeof field === 'string') {
            return { label: field, name: field }
          }
          return field
        })
      }
      return []
    },
    allChecked() {
      return this.data.length === this.checkedItems.length
    }
  },
  methods: {
    checkAll() {
      this.checkedAll = !this.checkedAll
      if (this.checkedAll) this.checkedItems = this.data
      else this.checkedItems = []
      this.$emit('on-check-all', this.checkedItems)
    },
    checkItem(item, event) {
      const found = this.checkedItems.find(
        (itemChecked) => itemChecked[this.trackBy] === item[this.trackBy]
      )
      if (found) {
        this.checkedItems = this.checkedItems.filter(
          (itemChecked) => itemChecked[this.trackBy] !== item[this.trackBy]
        )
        this.$emit('on-unchecked-item', item)
      } else {
        this.checkedItems = [...this.checkedItems, item]
        this.$emit('on-checked-item', item)
      }
      console.log(item, event) // eslint-disable-line no-console
    },
    isCheckedItem(item) {
      return !!this.checkedItems.find(
        (itemChecked) => itemChecked[this.trackBy] === item[this.trackBy]
      )
    },
    isFieldSortable(field) {
      const foundHeader = this.headerFields.find((item) => item.name === field)
      return foundHeader && foundHeader.sortable
    },
    isFieldSpecial: (field) => field.includes('__'),
    extractArgs: (field) => field.split(':')[1],
    extractActionID: (field) => {
      const list = field.split(':')[1]
      return list.length === 3 ? list[2] : 'actions'
    },
    customHeaderName: ({ customHeader, name }) =>
      typeof customHeader === 'string' ? customHeader : `${name}:header`,
    customElementName: ({ customElement, name }) =>
      typeof customElement === 'string' ? customElement : name,
    rowClick(rowItem, key) {
      console.log(key) // eslint-disable-line no-console
      if (!this.isFieldSpecial(key.name)) this.$emit('on-row-click', rowItem)
    },
    order(field) {
      if (this.isFieldSortable(field)) {
        if (this.sortedField === field) {
          this.sortedDirection = this.sortedDirection === 'asc' ? 'desc' : 'asc'
        } else {
          this.sortedDirection = 'asc'
          this.sortedField = field
        }
        this.updateData()
      }
    },
    updateData() {
      const params = {
        sortedField: this.sortedField,
        sort: this.sortedDirection
      }
      const sortedData = orderBy(
        this.data,
        [this.sortedField],
        [this.sortedDirection]
      )
      const start = (this.current_page - 1) * this.itemsPerPage
      const end = this.current_page * this.itemsPerPage
      this.data = sortedData.slice(start, end)
      this.$emit('on-update', params)
    }
  }
}
</script>

<style></style>
