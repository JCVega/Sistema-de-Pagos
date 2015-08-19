var varInStorage = function (nameStorage, valueDefecto) {
    this.a = valueDefecto;
    this.name = nameStorage;
    this.def = valueDefecto;
    Object.defineProperty(this, "value", {
        get: function () {
            if (this.a == this.def) {
                var inSession = localStorage.getItem(this.name);
                if (inSession != null) {
                    try {
                        valueInSession = JSON.parse(inSession);
                        if (typeof (this.a) == typeof (valueInSession))
                            this.a = valueInSession;
                    }
                    catch (x) {
                        this.a = this.def;
                    }
                }
            }
            localStorage.setItem(this.name, JSON.stringify(this.a));
            return this.a;
        },
        set: function (value) {
            this.a = value;
            localStorage.setItem(this.name, JSON.stringify(this.a));
        }
    });
};