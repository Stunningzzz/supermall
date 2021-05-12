<template>
  <div class="detail-params" v-if="itemParams">
    <div class="params-info">
      <list-title :title="itemParams.info.key" />
      <table class="info-table">
        <tr v-for="item in itemParams.info.set" :key="item.key">
          <td class="info-key">
            {{ item.key }}
          </td>
          <td class="info-value">
            {{ item.value }}
          </td>
        </tr>
      </table>
    </div>
    <div class="params-rule" v-if="tables.length">
      <list-title :title="itemParams.rule.key" />
      <table class="rule-table" v-for="table in tables">
        <tr class="rule-tr" v-for="tr in table" :key="tr[0]">
          <td v-for="td in tr">
            {{ td }}
          </td>
        </tr>
      </table>
      <div class="rule-disclaimer">
        {{ itemParams.rule.disclaimer }}
      </div>
    </div>
  </div>
</template>

<script>
import ListTitle from "components/common/title/ListTitle";

export default {
  name: "DetailParams",
  components: {
    ListTitle,
  },
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      tables: [],
    };
  },
  watch: {
    itemParams(itemParams) {
      if (itemParams.rule) {
        this.tables = itemParams.rule.tables;
        this.tables = this.tables.map((v) => {
          if (v.length > v[0].length) {
            return v;
          }
          let reverse = Array(v[0].length)
            .fill(0)
            .map(() => Array(v.length).fill(0));
          for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < v[i].length; j++) {
              reverse[j][i] = v[i][j];
            }
          }
          return reverse;
        });
      }
    },
  },
};
</script>

<style scoped>
.detail-params {
  border-bottom: 5px solid #ededed;
}
.info-table,
.rule-table {
  width: 95%;
  margin: 0 auto;
  border-collapse: collapse;
  margin-bottom: 10px;
}
.info-table td,
.rule-table td {
  border: 1px solid black;
}
.info-key {
  width: 20%;
  padding: 14px;
}
.info-value {
  color: var(--color-tint);
  padding: 14px;
}
.rule-tr td {
  padding: 17px 10px;
  text-align: center;
}

.params-rule {
  width: 320px;
}
.rule-disclaimer {
  font-weight: bold;
  font-size: 12px;
  margin: 0 8px 10px;
}
</style>