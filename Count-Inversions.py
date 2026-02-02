class Solution:
    def inversionCount(self, arr):
    #     self.temp = [0] * len(arr)
        return self._mergeSort(arr, 0, len(arr) - 1)

    def _mergeSort(self, arr, low, high):
        cnt = 0
        if low < high:
            mid = (low + high) // 2
            cnt += self._mergeSort(arr, low, mid)
            cnt += self._mergeSort(arr, mid + 1, high)
            cnt += self._merge(arr, low, mid, high)
        return cnt

    def _merge(self, arr, low, mid, high):
        i = low
        j = mid + 1
        k = low
        inv = 0

        while i <= mid and j <= high:
            if arr[i] <= arr[j]:
                self.temp[k] = arr[i]
                i += 1
            else:
                self.temp[k] = arr[j]
                inv += (mid - i + 1)
                j += 1
            k += 1

        while i <= mid:
            self.temp[k] = arr[i]
            i += 1
            k += 1

        while j <= high:
            self.temp[k] = arr[j]
            j += 1
            k += 1

        for idx in range(low, high + 1):
            arr[idx] = self.temp[idx]

        return inv

    
