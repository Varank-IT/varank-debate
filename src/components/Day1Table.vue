<template>
    <div style="overflow-x: auto;">
        <SectionLabel label="Organization Schedule" />
        <h2>Day 1</h2>
        <table>
            <tr>
                <th>Time</th>
                <th>Day 1</th>
            </tr>
            <tr>
                <td>8.20-9.00 </td>
                <td>Registration and Breakfastㅤㅤㅤ</td>
            </tr>
            <tr>
                <td>9.00-9.40</td>
                <td>Opening Ceremony</td>
            </tr>
            <tr>
                <td>9.40-11.40</td>
                <td>1st Round Matches</td>
            </tr>
            <tr>
                <td>14.40-12.10</td>
                <td>Coffee Break</td>
            </tr>
            <tr>
                <td>12.10-14.10</td>
                <td>2nd Round Matches</td>
            </tr>
            <tr>
                <td>14.10-15.20</td>
                <td>Lunch Break</td>
            </tr>
            <tr>
                <td>15.20-17.20</td>
                <td>3rd Round Matches</td>
            </tr>
            <tr>
                <td>17.20-17.50</td>
                <td>Coffee Break</td>
            </tr>
            <tr>
                <td>17.50-19.50</td>
                <td>4th Round Matches</td>
            </tr>

        </table>
    </div>
</template>

<script>
import SectionLabel from './SectionLabel.vue'

export default {
    name: 'Day1Table',
    components: {
        SectionLabel
    }
}
</script>

<style scoped>
div {
    padding: 2vh 8vw;
}

table {
    border-collapse: collapse;
    width: 100%;
    padding-left: 10vh;
    padding-right: 10vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
}

th,
td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>