<template>
    <h4 class="experience-count">
        <p :id="idName">{{ startVal }}</p><p>{{ unit }}<p/>
        <slot name="intro"></slot>
    </h4>

</template>

<script>
    import CountUp from 'countup';
    function transformValue (val) {
        let endVal = 0;
        let unit = '';
        if (val < 1000) {
            endVal = val;
        } else if (val >= 1000 && val < 1000000) {
            endVal = parseInt(val / 1000);
            unit = 'K+';
        } else if (val >= 1000000 && val < 10000000000) {
            endVal = parseInt(val / 1000000);
            unit = 'M+';
        } else {
            endVal = parseInt(val / 1000000000);
            unit = 'B+';
        }
        return {
            val: endVal,
            unit: unit
        };
    }
    export default {
        data () {
            return {
                unit: '',
                demo: {
                    update() {}
                }
            };
        },
        name: 'countUp',
        props: {
            idName: String,
            startVal: {
                type: Number,
                default: 0
            },
            endVal: {
                type: Number,
                required: true
            },
            decimals: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 2
            },
            delay: {
                type: Number,
                default: 500
            },
            options: {
                type: Object,
                default: () => {
                    return {
                        useEasing: true,
                        useGrouping: true,
                        separator: ',',
                        decimal: '.'
                    };
                }
            },
            introText: [String, Number]
        },
        mounted () {
            this.$nextTick(() => {
                setTimeout(() => {
                    let res = transformValue(this.endVal);
                    let endVal = res.val;
                    this.unit = res.unit;
                    let demo = {};
                    this.demo = demo = new CountUp(this.idName, this.startVal, endVal, this.decimals, this.duration, this.options);
                    if (!demo.error) {
                        demo.start();
                    }
                }, this.delay);
            });
        },
        watch: {
            endVal (val) {
                let res = transformValue(val);
                let endVal = res.val;
                this.unit = res.unit;
                this.demo.update(endVal);
            }
        }
    };
</script>

<style scoped>
    .experience-count {
        margin: 0;
        font-size: 60px;
        color: #15B982;
    }
    .experience-count span {
        display: block;
        color: #fff;
        font-size: .5em;
        position: relative;
    }
</style>