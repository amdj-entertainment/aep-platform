<template>
  <div class="px-4">
    <DataTable
      :header-fields="headerFields"
      :sort-field="sortField"
      :sort="sort"
      :data="data || []"
      :is-loading="isLoading"
      not-found-msg="Items not found"
      track-by="code"
      @onUpdate="updateSort"
      @on-row-click="RowClick"
    >
      <div slot="actions" slot-scope="props" class="flex justify-center">
        <Dropdown>
          <div slot="dropdown-link">
            <font-awesome-icon
              :icon="['fas', 'ellipsis-h']"
            ></font-awesome-icon>
          </div>
          <div
            slot="dropdown-items"
            class="bg-white shadow rounded overflow-hidden"
          >
            <a
              href="#"
              class="no-underline block px-4 py-3 text-grey-darkest bg-white hover:text-gray-900 font-bold hover:bg-red-500 whitespace-no-wrap"
              @click.stop="ShowEventRequests(props)"
              >View Event Requests</a
            >
          </div>
        </Dropdown>
        <!-- <input
          type="button"
          class="btn btn-success uppercase"
          value="View Requests"
          @click.stop="ShowEventRequests(props)"
        /> -->
      </div>
      <div slot="spinner" class="text-center p-5">
        <font-awesome-icon
          :icon="['fas', 'sync-alt']"
          :spin="true"
          size="5x"
        ></font-awesome-icon>
      </div>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable'
import Dropdown from '@/components/Dropdown'
// import EventStatus from '@/components/EventStatus'

export default {
  layout: 'dashboard',
  name: 'Events',
  components: {
    DataTable,
    Dropdown
  },
  data() {
    return {
      headerFields: [
        '__slot:checkboxes',
        {
          name: 'code',
          label: 'Code',
          sortable: true
        },
        {
          name: 'name',
          label: 'Name',
          sortable: true
        },
        {
          name: 'open',
          label: 'Open',
          sortable: true
        },
        {
          name: 'close',
          label: 'Close',
          sortable: true
        },
        '__slot:actions'
      ],
      sortField: 'code',
      sort: 'asc',
      data: null,
      isLoading: true
    }
  },
  mounted() {
    const simRequest = {
      hasNextPage: false,
      hasPrevPage: false,
      limit: 5,
      nextPage: null,
      page: 1,
      prevPage: null,
      totalPages: 1,
      events: [
        {
          _id: '5d010bb74b129397607e2ac5',
          _workspaceID: '5d003c0c34aea526f8c44b65',
          code: 'TOYS',
          name: 'multi-byte Internal optimizing',
          details:
            'Sit dolor ut amet veniam quaerat numquam minima eaque. Harum autem non incidunt omnis eaque. Facere molestias vel culpa dignissimos nemo voluptatum sit. Deleniti sed aperiam et et.',
          open: '2019-06-12T14:26:57.064Z',
          close: '2019-06-12T14:26:57.064Z',
          createdAt: '2019-06-12T14:27:03.207Z',
          updatedAt: '2019-06-12T14:27:03.207Z'
        },
        {
          _id: '5d010bb74b129397607e2ac6',
          _workspaceID: '5d003c0c34aea526f8c44b65',
          code: 'CORKERY',
          name: 'gold Sausages',
          details:
            'Facilis et amet rerum quibusdam consequatur. Soluta commodi molestiae eum iusto. Est aliquam rerum fugit tempore similique quae.',
          open: '2019-06-12T14:26:57.064Z',
          close: '2019-06-12T14:26:57.064Z',
          createdAt: '2019-06-12T14:27:03.208Z',
          updatedAt: '2019-06-12T14:27:03.208Z'
        },
        {
          _id: '5d010bb74b129397607e2ac7',
          _workspaceID: '5d003c0c34aea526f8c44b65',
          code: 'BAYER',
          name: 'driver Bedfordshire Future',
          details:
            'Rerum mollitia modi labore consequatur sunt illo. Sit suscipit consectetur nam suscipit earum quibusdam consequatur aut. Cumque incidunt et aspernatur voluptatem. Eum accusamus ullam praesentium dolores. Enim incidunt natus praesentium nam velit est aspernatur aut.',
          open: '2019-06-12T14:26:57.064Z',
          close: '2019-06-12T14:26:57.064Z',
          createdAt: '2019-06-12T14:27:03.208Z',
          updatedAt: '2019-06-12T14:27:03.208Z'
        },
        {
          _id: '5d010bb74b129397607e2ac8',
          _workspaceID: '5d003c0c34aea526f8c44b65',
          code: 'LEHNER',
          name: 'Car Jewelery Grocery',
          details:
            'Sapiente aliquam odit sunt. Ut quod unde corporis vero possimus aspernatur atque autem consequatur. Totam nam nobis accusantium id. Iusto est dolores non nisi necessitatibus. Soluta autem consectetur laborum voluptates animi.',
          open: '2019-06-12T14:26:57.064Z',
          close: '2019-06-12T14:26:57.064Z',
          createdAt: '2019-06-12T14:27:03.208Z',
          updatedAt: '2019-06-12T14:27:03.208Z'
        },
        {
          _id: '5d010bb74b129397607e2ac9',
          _workspaceID: '5d003c0c34aea526f8c44b65',
          code: 'SCHADEN',
          name: 'Fresh generate',
          details:
            'Quidem dolorem quod modi sed pariatur pariatur et fuga fugiat. Quae consequatur at inventore rerum quia in. Voluptatem temporibus eligendi. Qui veritatis aut maiores.',
          open: '2019-06-12T14:26:57.064Z',
          close: '2019-06-12T14:26:57.064Z',
          createdAt: '2019-06-12T14:27:03.208Z',
          updatedAt: '2019-06-12T14:27:03.208Z'
        }
      ]
    }

    setTimeout(() => {
      this.isLoading = false
      this.data = simRequest.events
    }, 1750)
  },
  methods: {
    updateSort() {},
    ShowEventRequests(props) {
      this.$router.push({
        path: `requests/${props.rowData._id}`
      })
    },
    RowClick(event) {
      // alert(JSON.stringify(event))
      this.$root.$emit('modal-open', 'EditEvent', { data: event })
    }
  }
}
</script>

<style></style>
