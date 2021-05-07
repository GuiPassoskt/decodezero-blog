---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Vue.js com Typescript

## Por que usar o ts?

- Mantenabilidade Futura de Código
- Simples Refatoração
- Facilidade de leitura e entendimento do código
- @types and .d.ts
- Tipagem e Interfaces
- É Azul
- Te avisa dos seu erros cometidos no desenvolvimento

## Já posso usar no Vue 2?

SIM!!!

O Vue 2.x já é todo tipado e pronto para iniciar o desenvolvimento com
TS com ajuda de plugins considerados oficiais.

Com o lançamento do Vue 3, ele será todo re-escrito em TypeScript
e o suporte será infinitamente superior, porem nada impede você de ja sair usando agora!

## Quais são estes plugins?

- vue-class-component (https://github.com/vuejs/vue-class-component)
- vue-property-decorator (https://github.com/kaorun343/vue-property-decorator)
- vuex-class (https://github.com/ktsn/vuex-class/)
- composition-api (https://github.com/vuejs/composition-api)

## Mas posso usar em SFC?

Lógico que.... Sim! Você tem várias possibilidades de implementar ele no seu Single-File-Component, você pode usar como classe... Como um decorator de uma classe... Exportando uma classe...

A partir do Vue 3 vai ser possível o uso nativo do composition API também, sem a necessidade do plugin.

Você pode usar como objeto base também, porém não tem todos os ganhos do TS.

## Exemplo de Vue + TS (Objeto)

```javascript
<script lang="ts">
import Vue, { PropType } from 'vue';
import { Meta } from './models';

export default Vue.extend({
  name: 'ObjectComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    meta: {
      type: (Object as unknown) as PropType<Meta>,
      required: true
    },
  },
  data(): { clickCount: number } {
    return {
      clickCount: 0
    };
  },
  methods: {
    increment(): void {
      this.clickCount++;
    },
  },
});
</script>
```

## Exemplo de Vue + TS (Class)

```javascript
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  private title: string = 'Vue + TS é tipo isso...';

  protected mounted (): void {
    this.welcome();
  }

  private get computedMsg (): string {
    return `Olá ${this.personName}, você está vendo, ${this.title}`;
  }

  public welcome: void () {
    alert(this.computedMsg);
  }
};
</script>
```

## Exemplo de Vue + TS (Class & Decorator)

```javascript
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo } from './models';

@Component
export default class CompositionComponent extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop(Boolean) readonly active!: boolean;

  private toDos: Todo[] = [];

  public addNewTodo(task) {
    this.toDos.push({
      task,
      date: new Date().toLocaleDateString(),
    })
  }

  protected get todoCount() {
    return this.todos.length;
  }

  protected prettyTodo(todo: Todo) {
    return `${todo.date} - ${todo.task}`;
  }
}
</script>
```

## Exemplo de Vue + TS (Composition API)

```javascript
<script lang="ts">
import { createComponent, PropType, computed, ref } from '@vue/composition-api';
import { Meta } from './models';

function clickFeatures(): { clickCount: number; increment: () => number; } {
  const clickCount: number = ref(0);
  function increment(): number => clickCount.value += 1;

  return { clickCount, increment };
}

export default createComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    meta: {
      type: (Object as unknown) as PropType<Meta>,
      required: true
    },
  },
  setup({ todos }) => { ...clickFeatures() };
});
</script>
```

## Posso usar TS nos plugins do Vue?

Sim, hoje todos os plugins do eco-sistema interno do Vue, como o Vuex,
Vue-Router, Vue-Apollo ou Vue-i18n são 100% tipados e preparados para o uso com o TS.

E uma grande parte dos plugins e libs de terceiros já tem seus tipos definidos
na própia lib, ou pelo @types, quando ela não foi escrita em TS.

## Eu uso Vue-CLI, como eu faço?

Simples, você só precisa executar um comando no terminal para
instalar o TS e ativar o build do seu projeto com TypeScript.

```code
$ vue add typescript
```

## Eu uso Quasar, como eu faço?

Simples, você só precisa executar um comando no terminal para
instalar o TS e ativar o build do seu projeto com TypeScript.

```code
$ quasar ext add @quasar/typescript
```
