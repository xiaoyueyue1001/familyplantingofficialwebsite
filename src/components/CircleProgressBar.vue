<template>
  <div class="progress-circle" ref="progressCircle">
    <svg :width="diameter" :height="diameter" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle
        :stroke-width="barWidth"
        :stroke="backgroundColor"
        class="progress-background"
        cx="50%"
        cy="50%"
        :r="diameter/2-barWidth/2"
        fill="transparent"
      />
      <circle
        :stroke-width="barWidth"
        :stroke="barColor"
        class="progress-bar"
        cx="50%"
        cy="50%"
        :r="diameter/2-barWidth/2"
        fill="transparent"
        :stroke-dasharray="perimeter"
        :stroke-dashoffset="percentToCircle"
        ref="progressBar"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    //整体外直径
    diameter: {
      type: Number,
      default: 200
    },
    //圆环宽度
    barWidth: {
      type: Number,
      default: 10
    },
    //进度[0,1]
    percent: {
      type: Number,
      default: 0.33
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    barColor: {
      type: String,
      default: "#2f4453"
    }
  },
  computed: {
    //周长
    perimeter() {
      return Math.PI * this.diameter;
    },
    percentToCircle() {
      return (1 - this.percent) * this.perimeter;
    }
  },
  mounted() {
    let random = Math.random();
    // js创建@keyframes
    const runkeyframes = ` 
      @keyframes lineMove {
        0% {
        stroke-dashoffset: ${this.perimeter};
        }
        100% {
        stroke-dashoffset: ${this.percentToCircle};
        }
      }
    `;
    // 创建style标签
    const style = document.createElement("style");
    // 设置style属性
    style.type = "text/css";
    // 将 keyframes样式写入style内
    style.innerHTML = runkeyframes;
    // 将style样式存放到head标签
    this.$refs.progressCircle.appendChild(style);
  }
};
</script>
<style lang="less" scoped>
.progress-circle {
  position: relative;
  svg {
    vertical-align: middle;
    circle {
      &.progress-bar {
        transform-origin: center;
        transform: rotate(-90deg);
        animation: lineMove 2s linear 1 0.6s;
      }
    }
  }
}
</style>