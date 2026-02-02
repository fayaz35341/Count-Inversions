/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    inversionCount(arr) {
        this.temp = new Array(arr.length);
        return this._mergeSort(arr, 0, arr.length - 1);
    }

    _mergeSort(arr, low, high) {
        let cnt = 0;

        if (low < high) {
            let mid = Math.floor((low + high) / 2);

            cnt += this._mergeSort(arr, low, mid);
            cnt += this._mergeSort(arr, mid + 1, high);
            cnt += this._merge(arr, low, mid, high);
        }

        return cnt;
    }

    _merge(arr, low, mid, high) {
        let i = low;
        let j = mid + 1;
        let k = low;
        let inv = 0;

        while (i <= mid && j <= high) {
            if (arr[i] <= arr[j]) {
                this.temp[k++] = arr[i++];
            } else {
                this.temp[k++] = arr[j++];
                inv += (mid - i + 1); // 🔑 inversion count
            }
        }

        while (i <= mid) {
            this.temp[k++] = arr[i++];
        }

        while (j <= high) {
            this.temp[k++] = arr[j++];
        }

        for (let idx = low; idx <= high; idx++) {
            arr[idx] = this.temp[idx];
        }

        return inv;
    }
}
